"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./Select.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * React component to create a custom select dropdown
 * @param { {id: String, options: Array, abbreviations: Boolean} } props - id: select id, options: array of selectable options, abbreviations: true if options are objects with name and abbreviation properties / false if option array is simple
 * @returns { React.ReactElement } Select component
 */
function Select(props) {
  // If the array of options has objects with abbreviations, get only the name
  // as title and only the abbreviation as value (saved in Redux).
  // This allows to have a simple array (no objects) as 'options' too.
  const [isListExpanded, setListExpanded] = (0, _react.useState)(false); // Set first option in array as displayed option

  const [selectedOptionTitle, setSelectedOptionTitle] = (0, _react.useState)(props.abbreviations ? props.options[0].name : props.options[0]); // Set first option in array as displayed option value

  const [selectedOptionValue, setSelectedOptionValue] = (0, _react.useState)(props.abbreviations ? props.options[0].abbreviation : props.options[0]);
  const [optionTabIndex, setOptionTabIndex] = (0, _react.useState)('-1');
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "select_wrapper"
  }, /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: isListExpanded ? 'select_button select_button--expanded' : 'select_button' // If clicked, show the options list and allow selection with keyboard
    ,
    onClick: () => {
      setListExpanded(!isListExpanded);
      setOptionTabIndex(optionTabIndex === -1 ? 0 : -1);
    }
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "select_button_text",
    id: props.id // Create an attribute "value" to easily get the wanted string
    // (which can be different than the text title)
    ,
    value: selectedOptionValue
  }, selectedOptionTitle), /*#__PURE__*/_react.default.createElement("span", {
    className: "select_button_icon"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "select_list_wrapper"
  }, /*#__PURE__*/_react.default.createElement("ul", {
    className: "select_list",
    role: "listbox",
    "aria-expanded": isListExpanded,
    "aria-label": "List of selectable options"
  }, props.options.map(option =>
  /*#__PURE__*/
  // Create a list element for each option in array
  // (aria-selected to know if option is selected)
  _react.default.createElement("li", {
    className: "select_list_choice",
    key: props.abbreviations ? option.name : option,
    role: "option",
    "aria-selected": selectedOptionTitle === (props.abbreviations ? option.name : option),
    tabIndex: optionTabIndex // If option selected/clicked, update selected title and value and hide the options list
    ,
    onClick: () => {
      setSelectedOptionTitle(props.abbreviations ? option.name : option);
      setSelectedOptionValue(props.abbreviations ? option.abbreviation : option);
      setListExpanded(!isListExpanded);
    }
  }, props.abbreviations ? option.name : option)))));
}

Select.propTypes = {
  id: _propTypes.default.string.isRequired,
  options: _propTypes.default.array.isRequired,
  abbreviations: _propTypes.default.bool.isRequired
};
var _default = Select;
exports.default = _default;