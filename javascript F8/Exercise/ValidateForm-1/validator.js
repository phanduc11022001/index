
// Đối tượng validator
function Validator(options) {

    // trong các trường hợp các thẻ bên html không cùng cấp
    // lọc để lấy class form-group
    function getParent(element, selector) {
        while (element.parentElement) {
            if(element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement
        }
    }

    var selectorRules = {}

    // Hàm thực hiện validate
    function validate(inputElement, rule) {
        var errorMessage ;
        var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector)

        // Lấy ra các rules của selector
        var rules = selectorRules[rule.selector]

        // Lặp qua từng rules & kiểm tra
        // Nếu có lỗi thì dừng việc kiểm tra
        for(var i = 0 ; i < rules.length; ++i) {
            switch (inputElement.type) {
                case 'checkbox':
                case 'radio':
                    errorMessage = rules[i](
                        formElement.querySelector(rule.selector + ':checked')
                    )
                    break;
                default:
                    errorMessage = rules[i](inputElement.value)
            }
            if(errorMessage) break;
        }

                    if(errorMessage) {
                        errorElement.innerText = errorMessage
                        getParent(inputElement, options.formGroupSelector).classList.add('invalid');
                    }
                    else{
                        errorElement.innerText = ''
                        getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
                    }

                    return !errorMessage;
                }

    // Lấy element của form cần validate
    var formElement = document.querySelector(options.form)
    
    if(formElement) {

        // Khi submit form
        formElement.onsubmit = function(e) {
            e.preventDefault();

            var isFormValid = true;

            // Lặp qua từng rules && validate luôn
            options.rules.forEach(function (rule) {
                var inputElement = formElement.querySelector(rule.selector)
                var isValid =  validate(inputElement, rule)      
                if  (!isValid) {
                    isFormValid = false;
                    
                }
            });

          

            if (isFormValid) {

              // Trường học submit với javascript
              if (typeof options.onSubmit === 'function') { 
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
                options.onSubmit(formValues);
              }
              // Trường họp Submit với hành vi mặc địng
              else {
                    formElement.submit()
              }

            }
            
        }

        // xử lý lặp qua mỗi rule và xử lý(lắng nghe sự kiện hay là blur)
         options.rules.forEach(function (rule) {

            // Lưu lại các rules trong mỗi input
           if (Array.isArray(selectorRules[rule.selector])) {
            selectorRules[rule.selector].push(rule.test);
           }
           else {
            selectorRules[rule.selector] = [rule.test] 
           }
            
             var inputElements = formElement.querySelectorAll(rule.selector)
             
             Array.from(inputElements).forEach(function(inputElement) {
                 if(inputElement) {
                // xử lý trường hợp blur ra khỏi input
                inputElement.onblur = function () {
                    validate(inputElement, rule)                    
                }

                // Xử lý mỗi khi người dùng nhập vào  input 
                inputElement.oninput = function () {
                    var errorElement = getParent(inputElement, options.formGroupSelector).querySelector('.form-message')
                    errorElement.innerText = ''
                    getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
                }
            }
             })
         })

    }
}

// Đinh nghĩa các rules
// Nguyên tắc của các rules
// 1. Khi có lỗi => trả ra message lỗi
// 2. khi hợp lệ => undefined
Validator.isRequired = function (selector, message) {
   return {
    selector:selector,
    test: function(value) {
        return value ? undefined : message || 'Vui lòng nhập trường này'
    }
   };
}

Validator.isEmail = function (selector, message) {
    return {
        selector:selector,
        test: function(value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : message || ' Trường này phải là email'
        }
       };
}

Validator.minLength = function (selector, min, message) {
    return {
        selector:selector,
        test: function(value) {
            return value.length >= min ? undefined : message || `Vui lòng nhập tối thiểu ${min} kí tự `
        }
       };
}
Validator.isConfirmed = function(selector, getCofirmValue, message) {
    return {
        selector:selector,
        test: function(value) {
            return value === getCofirmValue() ? undefined : message || 'Giá trị nhập vào không chính xác'
         }
       };
    }
