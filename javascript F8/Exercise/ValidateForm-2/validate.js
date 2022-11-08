
function Validator(formSelector ) {
    var _this = this;
  
    function getParent(element, selector) {
    while(element.parentElement) {
        if(element.parentElement.matches(selector)) {
            return element.parentElement;
        }
        element = element.parentElement
    }        
}
    var formRules = {};

    /**
     * Quy ước tạo rules
     *  - Nếu có lỗi thì return `error message`
     *  - Nếu không có lỗi thì return `undefined`
     */
    var validatorRules = {
        required : function(value) {
            return value ? undefined : 'Vui lòng nhập trường này'
        },
        email : function(value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value)? undefined : 'Vui lòng nhập email'
        },
        min : function(min) {
          return function(value) {
                return value.length >= min ? undefined : `Vui lòng nhập ít nhất ${min} kí tự`
            }
        },
        max : function(max) {
            return  function(value) {
                return value.length <= max ? undefined : `Vui lòng nhập tối đa ${max} kí tự`
            }
        },
    };



    // Lấy ra formElement trong DOM theo `formSelector`
    var formElement = document.querySelector(formSelector)

    // Chỉ xử lý khi có element trong DOM
    if(formElement) {

        var inputs = formElement.querySelectorAll('[name][rules')
        for(var input of inputs){

            var rules = input.getAttribute('rules').split('|')
            for (var rule of rules) {
                var ruleInfo;
                var isRulesValue = rule.includes(':')

                if(isRulesValue) {
                    ruleInfo = rule.split(':')
                    rule = ruleInfo[0]
                }

                var ruleFunc = validatorRules[rule]

                if(isRulesValue) {
                    ruleFunc = ruleFunc(ruleInfo[1])
                }
                
                if(Array.isArray(formRules[input.name])) {
                    formRules[input.name].push(ruleFunc);
                }
                else {
                    formRules[input.name] = [ruleFunc];
                }
            }

            // Lắng nghe sự kiện để validate (blur, change, .....)

            input.onblur = handleValidate;
            input.oninput = handleClearErrors;
        }

        // Hàm thực hiện validate
        function handleValidate(event) {
            var rules = formRules[event.target.name] ;
            var errorMessage 

            for(var rule of rules) {
                errorMessage = rule(event.target.value);
                if(errorMessage) break;
            }

            
           // Nếu có lỗi thì hiển thị ra UI 
           if(errorMessage) {
            var formGroup = getParent(event.target, '.form-group')

            if(formGroup) {
                formGroup.classList.add('invalid');

                var formMessage = formGroup.querySelector('.form-message')
                if(formMessage) {
                    formMessage.innerText = errorMessage
                }
            }
           }
           return !errorMessage;
        }
    }

        // Hàm clear Message lỗi
        function handleClearErrors(event) {
            var formGroup = getParent(event.target, '.form-group')
            if(formGroup.classList.contains('invalid')) { 
                formGroup.classList.remove('invalid');
                var formMessage = formGroup.querySelector('.form-message')

                if(formMessage) {
                    formMessage.innerText = '';
                }
            }
        }

        // xử lý hành vi submit form
        formElement.onsubmit = function(event) {
            event.preventDefault();
            
            var inputs = formElement.querySelectorAll('[name][rules')
            var isValid = true;

            for(var input of inputs){
                if(!handleValidate({ target : input })) {
                    isValid = false
                }
            };

            
            // Khi không có lỗi thì submit form
            if(isValid) {
                if(typeof _this.onsubmit === 'function') {
                    var enableInputs = formElement.querySelectorAll ('[name]');
                    var formValues = Array.from(enableInputs).reduce(function(values, input) {
                    
                    // Lấy ra value của checked
                    switch(input.type) {
                        case 'checkbox':
                            if(!input.matches(':checked')) {
                                values[input.name] = '';
                                return  values
                            }
                            if (!Array.isArray(values[input.name])){
                                values[input.name] = []
                            }

                            values[input.name].push(input.value);

                            break;
                            case 'radio':
                            values[input.name] = formElement.querySelector('input[name="' + input.name + '"]:checked').value
                            break;
                            case'file' :
                            values[input.name] = input.files
                            break;
                        default :
                        values[input.name] = input.value
                    }
                    return values
                }, {})

                    // Gọi lại hàm onsubmit và trả về giá trị của form 
                    _this.onsubmit(formValues)
                }
                else {
                    formElement.submit();
                }
        }
    }
}
