import { mount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import App from '../App.vue';
import { nextTick } from 'vue';

vi.mock('../components/personal-info.vue', () => {
  const validate = vi.fn(() => true);
  return {
    default: {
      name: 'PersonalInfo',
      template: '<div>PersonalInfo</div>',
      methods: { validate },
      __esModule: true,
      validateFn: validate
    }
  }
});

vi.mock('../components/select-plan.vue', () => {
  const validate = vi.fn(() => true)
  return {
    default: {
      name: 'SelectPlan',
      template: '<div>SelectPlan</div>',
      methods: { validate },
      __esModule: true,
      validateFn: validate
    }
  }
});

vi.mock('../components/add-ons.vue', () => ({
  default: { name: 'AddOns', template: '<div>AddOns</div>' }
}));

vi.mock('../components/summary-step.vue', () => ({
  default: { 
    name: 'Summary', 
    template: '<div>Summary<button @click="$emit(\'changeAddOns\')">change</button></div>' 
  }
}));

vi.mock('../components/thank-you.vue', () => ({
  default: { name: 'ThankYou', template: '<div>ThankYou</div>' }
}));

describe('App.vue', () => {
  it('renders first step (PersonalInfo) by default', () => {
    const wrapper = mount(App);
    expect(wrapper.html()).toContain('PersonalInfo');
  });

  it('advances to next step when PersonalInfo.validate passes', async () => {
    const wrapper = mount(App);
    await wrapper.find('button').trigger('click');
    expect(wrapper.html()).toContain('SelectPlan');
  });

  it('does not advance if PersonalInfo.validate fails', async () => {
    const wrapper = mount(App);

    const personalInfo = wrapper.findComponent({ name: 'PersonalInfo' }).vm;
    vi.spyOn(personalInfo, 'validate').mockReturnValue(false);

    await wrapper.find('button').trigger('click');
    expect(wrapper.findComponent({name: 'PersonalInfo'}).exists()).toBe(true);
    expect(wrapper.findComponent({name: 'SelectPlan'}).exists()).toBe(false);
  });

  it('does not advance if SelectPlan.validate fails', async () => {
    const wrapper = mount(App);

    // Set currentStep to 2 so SelectPlan renders
    (wrapper.vm as any).currentStep = 2;
    expect(wrapper.vm.currentStep).toBe(2);
    await nextTick() // wait for DOM to update

    const selectPlan = wrapper.findComponent({ name: 'SelectPlan' }).vm;
    vi.spyOn(selectPlan, 'validate').mockReturnValue(false);
    expect(wrapper.findComponent({name: 'SelectPlan'}).exists()).toBe(true);
    
    await wrapper.find('#nextStepButton').trigger('click');
    expect(wrapper.findComponent({name: 'SelectPlan'}).exists()).toBe(true);
    expect(wrapper.findComponent({name: 'PersonalInfo'}).exists()).toBe(false);
    expect(wrapper.findComponent({name: 'AddOns'}).exists()).toBe(false);
  });

  it('does advance to next step when SelectPlan.validate succeeds', async () => {
    const wrapper = mount(App);

    // Set currentStep to 2 so SelectPlan renders
    (wrapper.vm as any).currentStep = 2;
    expect(wrapper.vm.currentStep).toBe(2);
    await nextTick(); // wait for DOM to update

    const selectPlan = wrapper.findComponent({ name: 'SelectPlan' })?.vm;
    vi.spyOn(selectPlan, 'validate').mockReturnValue(true);
    expect(wrapper.findComponent({name: 'SelectPlan'}).exists()).toBe(true);

    await wrapper.find('#nextStepButton').trigger('click');
    expect(wrapper.findComponent({name: 'SelectPlan'}).exists()).toBe(false);
    expect(wrapper.findComponent({name: 'AddOns'}).exists()).toBe(true);
  })
});
