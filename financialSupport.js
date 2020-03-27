'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import { useForm } from "./useFrom";

var FinancialSupport = function FinancialSupport() {
  var _useForm = useForm({ offerer: "", email: "", phoneNum: "", amount: 0 }),
      _useForm2 = _slicedToArray(_useForm, 2),
      formVals = _useForm2[0],
      handleChange = _useForm2[1];

  return React.createElement(
    "div",
    { id: "container" },
    React.createElement(
      "label",
      { htmlFor: "offerer" },
      "Felaj\xE1nl\xF3: "
    ),
    React.createElement("input", { type: "text", name: "offerer", id: "offerer", value: formVals.offerer, onChange: handleChange }),
    React.createElement(
      "label",
      { htmlFor: "email" },
      "Email: "
    ),
    React.createElement("input", { type: "email", name: "email", id: "email", value: formVals.email, onChange: handleChange }),
    React.createElement(
      "label",
      { htmlFor: "phoneNum" },
      "Telefonsz\xE1m: "
    ),
    React.createElement("input", { type: "text", name: "phoneNum", id: "phoneNum", value: formVals.phoneNum, onChange: handleChange }),
    React.createElement(
      "label",
      { htmlFor: "amount" },
      "\xD6sszeg:"
    ),
    React.createElement("input", { type: "number", name: "amount", id: "amount", value: formVals.amount, onChange: handleChange }),
    React.createElement("button", { type: "submit", onSubmit: function onSubmit(e) {
        e.preventDefault;financialOfferingSender(formVals);
      } })
  );
};
var domContainer = document.querySelector('#financial-offer');
ReactDOM.render(React.createElement(FinancialSupport, null), domContainer);