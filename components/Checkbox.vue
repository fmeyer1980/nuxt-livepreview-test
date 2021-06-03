<template>
    <label class="checkbox [ flow-left ] [ space-xs ]">
        <span class="checkbox__input">
            <input type="checkbox" name="checkbox">
            <span class="checkbox__control">
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden="true" focusable="false">
                    <path fill='none' stroke='currentColor' stroke-width='3' d='M1.73 12.91l6.37 6.37L22.79 4.59' />
                </svg>
            </span>
        </span>
        <span class="radio__label [ color-light ]"><slot /></span>
    </label>
</template>

<script>
	export default {
		name: "checkbox",
	};
</script>

<style lang="scss" scoped>

@import './assets/scss/config';
$outputTokenCSS: false;
@import './node_modules/gorko/gorko.scss';

.checkbox {
    display: flex;
    align-items: center;
}

.checkbox__control {
    display: inline-grid;
    width: 2.6em;
    height: 2.6em;
    border-radius: 50%;
    background-color: get-color('secondary');
    color: get-color('secondary');
    display: flex;
    align-items: center;
    justify-content: center;

svg {
    transition: transform 0.1s ease-in 25ms;
    transform: scale(0);
    transform-origin: center;
    height: 50%;

}
}

.checkbox__input {
    display: grid;
    grid-template-areas: "checkbox";


    > * {
        grid-area: checkbox;
    }

    input {
        opacity: 0;
        width: 1em;
        height: 1em;

        &:checked + .checkbox__control {
            color: get-color('primary');
            svg{
                border-radius: 50%;
                transform: scale(1);
            }
        
        }
    }
}
</style>