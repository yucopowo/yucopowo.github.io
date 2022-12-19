// class UiSelector {
//     text(str) {
//
//     }
//     waitFor() {
//
//     }
// }

const UiSelector = {
    text(str) {
        return this;
    },
    parent() {

    },
    waitFor() {

    },
    textMatches(reg) {

    },
    findOne() {
        return this;
    },
    enabled() {
        return true;
    },
    click() {
    }
};

export const text = UiSelector.text;
export const textMatches = UiSelector.textMatches;

// text('111').waitFor()

// export function text(str) {
//
// }
