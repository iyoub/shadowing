import { ref } from "vue";

export interface Styles {
	color: string;
	size: string;
	radius: string;
	distance: string;
	blur: string;
}

// getting the initial values from the root css variables
export const styles = ref<Styles>({
	color: getComputedStyle(document.documentElement).getPropertyValue('--color'),
	size: getComputedStyle(document.documentElement).getPropertyValue('--size'),
	radius: getComputedStyle(document.documentElement).getPropertyValue('--radius'),
	distance: getComputedStyle(document.documentElement).getPropertyValue('--distance'),
	blur: getComputedStyle(document.documentElement).getPropertyValue('--blur'),
});

export const updateStyle = (key: keyof Styles, value: string) => {
	// updating the root css variables
	document.documentElement.style.setProperty(`--${key}`, value);
	// updating the state
	styles.value[key] = value;
}