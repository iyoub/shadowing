import { getElementStyle } from "@/helpers";
import { ref } from "vue";

export interface Styles {
	color: string;
	size: string;
	radius: string;
	distance: string;
	blur: string;
}

// code is a string
type Code = string;

// getting the initial values from the root css variables
export const styles = ref<Styles>({
	color: getComputedStyle(document.documentElement).getPropertyValue('--color'),
	size: getComputedStyle(document.documentElement).getPropertyValue('--size'),
	radius: getComputedStyle(document.documentElement).getPropertyValue('--radius'),
	distance: getComputedStyle(document.documentElement).getPropertyValue('--distance'),
	blur: getComputedStyle(document.documentElement).getPropertyValue('--blur'),
});

const generateCode = () => {
	return `box-shadow: ${getElementStyle('--box-shadow')};\nborder-radius: ${getElementStyle(
		'--border-radius'
	)};`
}

// generating the initial code
export const code = ref<Code>(generateCode());

export const updateStyle = (key: keyof Styles, value: string) => {
	// updating the root css variables
	document.documentElement.style.setProperty(`--${key}`, value);
	// updating the state
	styles.value[key] = value;
	// updating the code
	code.value = generateCode();
}

