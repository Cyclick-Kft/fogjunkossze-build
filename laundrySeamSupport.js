'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

export var useForm = function useForm(initalValues) {
  var _React$useState = React.useState(initalValues),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      values = _React$useState2[0],
      setValues = _React$useState2[1];

  return [values, function (e) {
    setValues(Object.assign({}, values, _defineProperty({}, e.target.name, e.target.value)));
  }];
};

export var OfferingSender = function OfferingSender(url, formFields) {
  fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(formFields)
  }).then(function (res) {
    return res.ok ? alert("Sikeres felajánlás") : alert("Sikertelen felajánlás");
  }).catch(function () {
    return alert("Sikertelen felajánlás");
  });
};

var NaturalPersonForm = function NaturalPersonForm(props) {
  var _useForm = useForm({
    offerer: "",
    email: "",
    phoneNum: "",
    serviceType: "other",
    serviceName: "",
    quality: "volunteer",
    helpInTransport: false,
    supportMethod: "hospital"
  }),
      _useForm2 = _slicedToArray(_useForm, 2),
      naturalPersonFormVals = _useForm2[0],
      naturalPersonHandleChange = _useForm2[1];

  var _React$useState3 = React.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      GDPR = _React$useState4[0],
      setGDPR = _React$useState4[1];

  return React.createElement(
    'form',
    { onSubmit: function onSubmit(e) {
        e.preventDefault();OfferingSender("http://api.fogjunkossze.hu/laundry-seam-support", naturalPersonFormVals);
      } },
    React.createElement(
      'label',
      { htmlFor: 'offerer' },
      'N\xE9v:'
    ),
    React.createElement('input', { className: 'form-control', type: 'text', name: 'offerer', id: 'offerer', value: naturalPersonFormVals.offerer, onChange: naturalPersonHandleChange }),
    React.createElement(
      'label',
      { htmlFor: 'email' },
      'Email: '
    ),
    React.createElement('input', { className: 'form-control', type: 'email', name: 'email', id: 'email', value: naturalPersonFormVals.email, onChange: naturalPersonHandleChange }),
    React.createElement(
      'label',
      { htmlFor: 'phoneNum' },
      'Telefonsz\xE1m: '
    ),
    React.createElement(
      'small',
      { className: 'text-muted' },
      'K\xF6t\u0151jelekkel tagolva pl: (+36-30-000-0000)'
    ),
    React.createElement('input', { className: 'form-control', type: 'tel', placeholder: '+36-30-000-0000', pattern: '[+]{1}[0-9]{2}-[0-9]{2}-[0-9]{3}-[0-9]{4}', name: 'phoneNum', id: 'phoneNum', value: naturalPersonFormVals.phoneNum, onChange: naturalPersonHandleChange }),
    React.createElement(
      'label',
      { htmlFor: 'serviceType' },
      'Szolg\xE1ltat\xE1s t\xEDpusa:'
    ),
    React.createElement(
      'select',
      { className: 'form-control', name: 'serviceType', id: 'serviceType', value: naturalPersonFormVals.serviceType, onChange: naturalPersonHandleChange },
      React.createElement(
        'option',
        { value: 'laundry' },
        'Mos\xE1s'
      ),
      React.createElement(
        'option',
        { value: 'seam' },
        'Varr\xE1s'
      ),
      React.createElement(
        'option',
        { value: 'other' },
        'Egy\xE9b'
      )
    ),
    React.createElement(
      'label',
      { htmlFor: 'serviceName' },
      'Szolg\xE1ltat\xE1s neve:'
    ),
    React.createElement('input', { className: 'form-control', type: 'text', name: 'serviceName', id: 'serviceName', value: naturalPersonFormVals.serviceName, onChange: naturalPersonHandleChange }),
    React.createElement(
      'label',
      { htmlFor: 'quality' },
      'Szolg\xE1ltat\xE1s min\u0151s\xE9ge:'
    ),
    React.createElement(
      'select',
      { className: 'form-control', name: 'quality', id: 'quality', value: naturalPersonFormVals.quality, onChange: naturalPersonHandleChange },
      React.createElement(
        'option',
        { value: 'professional' },
        'Hivat\xE1sos'
      ),
      React.createElement(
        'option',
        { value: 'volunteer' },
        '\xD6nk\xE9ntes'
      )
    ),
    React.createElement(
      'label',
      { htmlFor: 'helpInTransport' },
      'Sz\xE1ll\xEDt\xE1sban tud seg\xEDteni:'
    ),
    React.createElement(
      'select',
      { className: 'form-control', name: 'helpInTransport', id: 'helpInTransport', value: naturalPersonFormVals.helpInTransport, onChange: naturalPersonHandleChange },
      React.createElement(
        'option',
        { value: true },
        'Tudok seg\xEDteni a sz\xE1ll\xEDt\xE1sban'
      ),
      React.createElement(
        'option',
        { value: false },
        'Nem tudok seg\xEDteni a sz\xE1ll\xEDt\xE1sban'
      )
    ),
    React.createElement(
      'label',
      { htmlFor: 'supportMethod' },
      'Kedvezm\xE9nyezett:'
    ),
    React.createElement(
      'select',
      { className: 'form-control', name: 'supportMethod', id: 'supportMethod', value: naturalPersonFormVals.supportMethod, onChange: naturalPersonHandleChange },
      React.createElement(
        'option',
        { value: 'hospital' },
        'K\xF3rh\xE1z'
      ),
      React.createElement(
        'option',
        { value: 'person' },
        'Mag\xE1nszem\xE9ly'
      )
    ),
    React.createElement(
      'label',
      { htmlFor: 'GDPR' },
      'Az ',
      React.createElement(
        'a',
        { target: '_blank', href: 'http://fogjunkossze.hu/adatvedelmi-nyilatkozat' },
        'adatkezel\xE9si nyilatkozatot'
      ),
      ' elfogadom'
    ),
    React.createElement('input', { type: 'checkbox', name: 'GDPR', id: 'GDPR', onChange: function onChange() {
        return setGDPR(!GDPR);
      } }),
    React.createElement('br', null),
    React.createElement(
      'button',
      { className: 'btn btn-outline-success align-self-center', disabled: !GDPR, type: 'submit' },
      'Felaj\xE1nl\xE1s k\xFCld\xE9se'
    )
  );
};

var CompanyForm = function CompanyForm(props) {
  var _useForm3 = useForm({
    offerer: "",
    contactPerson: "",
    taxNumber: "",
    address: "",
    email: "",
    phoneNum: "",
    serviceType: "other",
    serviceName: "",
    quality: "volunteer",
    helpInTransport: false,
    supportMethod: "hospital"
  }),
      _useForm4 = _slicedToArray(_useForm3, 2),
      companyFormVals = _useForm4[0],
      companyHandleChange = _useForm4[1];

  var _React$useState5 = React.useState(false),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      GDPR = _React$useState6[0],
      setGDPR = _React$useState6[1];

  return React.createElement(
    'form',
    { onSubmit: function onSubmit(e) {
        e.preventDefault();OfferingSender("http://api.fogjunkossze.hu/laundry-seam-support", companyFormVals);
      } },
    React.createElement(
      'label',
      { htmlFor: 'offerer' },
      'C\xE9g n\xE9v:'
    ),
    React.createElement('input', { className: 'form-control', type: 'text', name: 'offerer', id: 'offerer', value: companyFormVals.offerer, onChange: companyHandleChange }),
    React.createElement(
      'label',
      { htmlFor: 'contactPerson' },
      'Kapcsolat tart\xF3 neve:'
    ),
    React.createElement('input', { className: 'form-control', type: 'text', name: 'contactPerson', id: 'contactPerson', value: companyFormVals.contactPerson, onChange: companyHandleChange }),
    React.createElement(
      'label',
      { htmlFor: 'taxNumber' },
      'Ad\xF3sz\xE1m:'
    ),
    React.createElement('input', { className: 'form-control', type: 'text', name: 'taxNumber', id: 'taxNumber', value: companyFormVals.taxNumber, onChange: companyHandleChange }),
    React.createElement(
      'label',
      { htmlFor: 'address' },
      'Sz\xE9khely:'
    ),
    React.createElement('input', { className: 'form-control', type: 'text', name: 'address', id: 'address', value: companyFormVals.address, onChange: companyHandleChange }),
    React.createElement(
      'label',
      { htmlFor: 'email' },
      'Email: '
    ),
    React.createElement('input', { className: 'form-control', type: 'email', name: 'email', id: 'email', value: companyFormVals.email, onChange: companyHandleChange }),
    React.createElement(
      'label',
      { htmlFor: 'phoneNum' },
      'Telefonsz\xE1m: '
    ),
    React.createElement(
      'small',
      { className: 'text-muted' },
      'K\xF6t\u0151jelekkel tagolva pl: (+36-30-000-0000)'
    ),
    React.createElement('input', { className: 'form-control', type: 'tel', placeholder: '+36-30-000-0000', pattern: '[+]{1}[0-9]{2}-[0-9]{2}-[0-9]{3}-[0-9]{4}', name: 'phoneNum', id: 'phoneNum', value: companyFormVals.phoneNum, onChange: companyHandleChange }),
    React.createElement(
      'label',
      { htmlFor: 'serviceType' },
      'Szolg\xE1ltat\xE1s t\xEDpusa:'
    ),
    React.createElement(
      'select',
      { className: 'form-control', name: 'serviceType', id: 'serviceType', value: companyFormVals.serviceType, onChange: companyHandleChange },
      React.createElement(
        'option',
        { value: 'laundry' },
        'Mos\xE1s'
      ),
      React.createElement(
        'option',
        { value: 'seam' },
        'Varr\xE1s'
      ),
      React.createElement(
        'option',
        { value: 'other' },
        'Egy\xE9b'
      )
    ),
    React.createElement(
      'label',
      { htmlFor: 'serviceName' },
      'Szolg\xE1ltat\xE1s neve:'
    ),
    React.createElement('input', { className: 'form-control', type: 'text', name: 'serviceName', id: 'serviceName', value: companyFormVals.serviceName, onChange: companyHandleChange }),
    React.createElement(
      'label',
      { htmlFor: 'quality' },
      'Szolg\xE1ltat\xE1s min\u0151s\xE9ge:'
    ),
    React.createElement(
      'select',
      { className: 'form-control', name: 'quality', id: 'quality', value: companyFormVals.quality, onChange: companyHandleChange },
      React.createElement(
        'option',
        { value: 'professional' },
        'Hivat\xE1sos'
      ),
      React.createElement(
        'option',
        { value: 'volunteer' },
        '\xD6nk\xE9ntes'
      )
    ),
    React.createElement(
      'label',
      { htmlFor: 'helpInTransport' },
      'Sz\xE1ll\xEDt\xE1sban tud seg\xEDteni:'
    ),
    React.createElement(
      'select',
      { className: 'form-control', name: 'helpInTransport', id: 'helpInTransport', value: companyFormVals.helpInTransport, onChange: companyHandleChange },
      React.createElement(
        'option',
        { value: true },
        'Tudok seg\xEDteni a sz\xE1ll\xEDt\xE1sban'
      ),
      React.createElement(
        'option',
        { value: false },
        'Nem tudok seg\xEDteni a sz\xE1ll\xEDt\xE1sban'
      )
    ),
    React.createElement(
      'label',
      { htmlFor: 'supportMethod' },
      'Kedvezm\xE9nyezett:'
    ),
    React.createElement(
      'select',
      { className: 'form-control', name: 'supportMethod', id: 'supportMethod', value: companyFormVals.supportMethod, onChange: companyHandleChange },
      React.createElement(
        'option',
        { value: 'hospital' },
        'K\xF3rh\xE1z'
      ),
      React.createElement(
        'option',
        { value: 'person' },
        'Mag\xE1nszem\xE9ly'
      )
    ),
    React.createElement(
      'label',
      { htmlFor: 'GDPR' },
      'Az ',
      React.createElement(
        'a',
        { target: '_blank', href: 'http://fogjunkossze.hu/adatvedelmi-nyilatkozat' },
        'adatkezel\xE9si nyilatkozatot'
      ),
      ' elfogadom'
    ),
    React.createElement('input', { type: 'checkbox', name: 'GDPR', id: 'GDPR', onChange: function onChange() {
        return setGDPR(!GDPR);
      } }),
    React.createElement('br', null),
    React.createElement(
      'button',
      { className: 'btn btn-outline-success align-self-center', disabled: !GDPR, type: 'submit' },
      'Felaj\xE1nl\xE1s k\xFCld\xE9se'
    )
  );
};

var LaundrySeamSupport = function LaundrySeamSupport() {
  var _React$useState7 = React.useState(false),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      isCompany = _React$useState8[0],
      setIsCompany = _React$useState8[1];

  return React.createElement(
    'div',
    { id: 'form-container', className: 'container' },
    React.createElement(
      'label',
      null,
      'Mag\xE1nszem\xE9lyk\xE9nt teszek felaj\xE1nl\xE1st:',
      React.createElement('input', { type: 'radio', name: 'isCompany', id: 'asNaturalPerson', value: false, onChange: function onChange() {
          return setIsCompany(false);
        } })
    ),
    React.createElement(
      'label',
      null,
      'C\xE9g k\xE9nt teszek felaj\xE1nl\xE1st:',
      React.createElement('input', { type: 'radio', name: 'isCompany', id: 'asCompany', value: true, onChange: function onChange() {
          return setIsCompany(true);
        } })
    ),
    React.createElement('br', null),
    isCompany ? React.createElement(CompanyForm, null) : React.createElement(NaturalPersonForm, null)
  );
};
var domContainer = document.querySelector('#laundrySeamOffer');
ReactDOM.render(React.createElement(LaundrySeamSupport, null), domContainer);