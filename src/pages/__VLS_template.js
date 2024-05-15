import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name } from './NotFound.vue';

function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $scopedSlots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'VCard', typeof __VLS_localComponents, "VCard", "vCard", "v-card"> &
__VLS_WithComponent<'VAppBar', typeof __VLS_localComponents, "VAppBar", "vAppBar", "v-app-bar"> &
__VLS_WithComponent<'VImg', typeof __VLS_localComponents, "VImg", "vImg", "v-img"> &
__VLS_WithComponent<'VAppBarNavIcon', typeof __VLS_localComponents, "VAppBarNavIcon", "vAppBarNavIcon", "v-app-bar-nav-icon">;
__VLS_components.VCard; __VLS_components.vCard; __VLS_components["v-card"];
// @ts-ignore
[VCard,];
__VLS_components.VAppBar; __VLS_components.VAppBar; __VLS_components.vAppBar; __VLS_components.vAppBar; __VLS_components["v-app-bar"]; __VLS_components["v-app-bar"];
// @ts-ignore
[VAppBar, VAppBar,];
__VLS_intrinsicElements.template; __VLS_intrinsicElements.template;
__VLS_components.VImg; __VLS_components.VImg; __VLS_components.vImg; __VLS_components.vImg; __VLS_components["v-img"]; __VLS_components["v-img"];
// @ts-ignore
[VImg, VImg,];
__VLS_components.VAppBarNavIcon; __VLS_components.VAppBarNavIcon; __VLS_components.vAppBarNavIcon; __VLS_components.vAppBarNavIcon; __VLS_components["v-app-bar-nav-icon"]; __VLS_components["v-app-bar-nav-icon"];
// @ts-ignore
[VAppBarNavIcon, VAppBarNavIcon,];
{
const __VLS_0 = ({} as 'VCard' extends keyof typeof __VLS_ctx ? { 'VCard': typeof __VLS_ctx.VCard; } : 'vCard' extends keyof typeof __VLS_ctx ? { 'VCard': typeof __VLS_ctx.vCard; } : 'v-card' extends keyof typeof __VLS_ctx ? { 'VCard': (typeof __VLS_ctx)["v-card"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VCard;
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{}, class: ("overflow-hidden"), }));
({} as { VCard: typeof __VLS_0; }).VCard;
const __VLS_2 = __VLS_1({ ...{}, class: ("overflow-hidden"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, class: ("overflow-hidden"), });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
{
const __VLS_5 = ({} as 'VAppBar' extends keyof typeof __VLS_ctx ? { 'VAppBar': typeof __VLS_ctx.VAppBar; } : 'vAppBar' extends keyof typeof __VLS_ctx ? { 'VAppBar': typeof __VLS_ctx.vAppBar; } : 'v-app-bar' extends keyof typeof __VLS_ctx ? { 'VAppBar': (typeof __VLS_ctx)["v-app-bar"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VAppBar;
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{}, absolute: (true), color: ("#6A76AB"), dark: (true), shrinkOnScroll: (true), prominent: (true), src: ("../assets/fundo preto.jpg"), fadeImgOnScroll: (true), scrollTarget: ("#scrolling-techniques-3"), }));
({} as { VAppBar: typeof __VLS_5; }).VAppBar;
({} as { VAppBar: typeof __VLS_5; }).VAppBar;
const __VLS_7 = __VLS_6({ ...{}, absolute: (true), color: ("#6A76AB"), dark: (true), shrinkOnScroll: (true), prominent: (true), src: ("../assets/fundo preto.jpg"), fadeImgOnScroll: (true), scrollTarget: ("#scrolling-techniques-3"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, absolute: (true), color: ("#6A76AB"), dark: (true), shrinkOnScroll: (true), prominent: (true), src: ("../assets/fundo preto.jpg"), fadeImgOnScroll: (true), scrollTarget: ("#scrolling-techniques-3"), });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
{
const __VLS_10 = __VLS_intrinsicElements["template"];
const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
const __VLS_12 = __VLS_11({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, });
{
const [{ props }] = __VLS_getSlotParams((__VLS_8.slots!).img);
{
const __VLS_13 = ({} as 'VImg' extends keyof typeof __VLS_ctx ? { 'VImg': typeof __VLS_ctx.VImg; } : 'vImg' extends keyof typeof __VLS_ctx ? { 'VImg': typeof __VLS_ctx.vImg; } : 'v-img' extends keyof typeof __VLS_ctx ? { 'VImg': (typeof __VLS_ctx)["v-img"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VImg;
const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({ ...{}, ...(props), gradient: ("to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"), }));
({} as { VImg: typeof __VLS_13; }).VImg;
({} as { VImg: typeof __VLS_13; }).VImg;
const __VLS_15 = __VLS_14({ ...{}, ...(props), gradient: ("to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"), }, ...__VLS_functionalComponentArgsRest(__VLS_14));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_13, typeof __VLS_15> & Record<string, unknown>) => void)({ ...{}, ...(props), gradient: ("to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"), });
const __VLS_16 = __VLS_pickFunctionalComponentCtx(__VLS_13, __VLS_15)!;
let __VLS_17!: __VLS_NormalizeEmits<typeof __VLS_16.emit>;
}
}
}
{
const __VLS_18 = ({} as 'VAppBarNavIcon' extends keyof typeof __VLS_ctx ? { 'VAppBarNavIcon': typeof __VLS_ctx.VAppBarNavIcon; } : 'vAppBarNavIcon' extends keyof typeof __VLS_ctx ? { 'VAppBarNavIcon': typeof __VLS_ctx.vAppBarNavIcon; } : 'v-app-bar-nav-icon' extends keyof typeof __VLS_ctx ? { 'VAppBarNavIcon': (typeof __VLS_ctx)["v-app-bar-nav-icon"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VAppBarNavIcon;
const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ ...{}, }));
({} as { VAppBarNavIcon: typeof __VLS_18; }).VAppBarNavIcon;
({} as { VAppBarNavIcon: typeof __VLS_18; }).VAppBarNavIcon;
const __VLS_20 = __VLS_19({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_19));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_18, typeof __VLS_20> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_21 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20)!;
let __VLS_22!: __VLS_NormalizeEmits<typeof __VLS_21.emit>;
}
}
(__VLS_3.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
__VLS_styleScopedClasses["overflow-hidden"];
}
var __VLS_slots!: {};
return __VLS_slots;
}
