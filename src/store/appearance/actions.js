import store from "~/store/index";
import {_setBackgroundColor, _setColor, _setColorFontSize } from ".";

export const setBackgroundColor = data => store.dispatch(_setBackgroundColor(data))
export const setColor = data => store.dispatch(_setColor(data))
export const setFontSize = data => store.dispatch(_setColorFontSize(data))
