// MVC - model, view, controller

var model = ( () => {

  class Item {
    constructor(id, name, value) {
      this.id = id;
      this.name = name;
      this.value = value;
    }
  }

  // allItems = [];
  // total = 0;

  let data = {

    allItems: [],
    totals:0,

  }

  let calculateTotal = () => {

    let sum = 0;
    $(data.allItems).each( (i, currentVal) => {

      sum += currentVal.value;

    });

    data.totals = sum;

  }

  return {

    addItem: (name, value) => {

      let ID = 0;

      // [1, 2, 3, 4, 5]  6  ID = array.length + 1
      // [1, 2, 4, 5, 6]  7  ID = last_element.id + 1

      if (data.allItems.length > 0){

        ID = data.allItems[data.allItems.length - 1].id + 1;

      } else {

        ID = 0;

      }

      let newItem = new Item(ID, name, value);
      data.allItems.push(newItem);

      return newItem;

    },

    deleteItem: (id) => {

      let ids = data.allItems.map((currentVal) => {

        return currentVal.id;
      });

      let index = ids.indexOf(parseInt(id, 10));

      // console.log(index);

      if (index >= 0) {

        data.allItems.splice(index, 1);
      }

      // console.log(ids);
    },

    calculateSum: () => {

      calculateTotal();

      return {

        sum: data.totals,
      }
    },

    test: () => {
      console.log(data);
    },

  }

})();

var view = (() => {

    let DOMstrings = {

      name: '.name',
      value: '.value',
      btn: '.bought_btn',
      list: '.bought_list',
      sumLabel: '.total_value',
      container: '.container',

    };

    return {

      getInfo: () => {

        return {

          name: $(DOMstrings.name).val(),
          value: parseFloat($(DOMstrings.value).val()),

        };

      },

      addListItem: (object) => {

        let newHTML;

        let element = DOMstrings.list;

        let html = '\
        <div class="item clearfix" id = "%id%">\
          <div class="item_name">%name%</div>\
          <div class="right clearfix">\
            <div class="item_value">%value%</div>\
            <div class="delete">\
              <button class="delete_btn"><i class="ion-ios-close-outline"></i></button>\
            </div>\
          </div>\
        </div>';

        newHTML = html.replace('%id%', object.id);
        newHTML = newHTML.replace('%name%', object.name);
        newHTML = newHTML.replace('%value%', object.value);

        $(element).append(newHTML);

      },

      deleteListItem: (id) => {

        let element = document.getElementById(id);

        // console.log(element.parentNode);

        element.parentNode.removeChild(element);
      },

      clearInput: () => {

        let inputs = $(DOMstrings.name + ',' + DOMstrings.value);

        // console.log(inputs);

        // let inputArray = Array.prototype.slice.call(inputs);

        // console.log(inputArray);

        $(inputs).each( (i, currentVal) => {

          currentVal.value = '';

        });

        inputs[0].focus();


      },

      displaySum: (object) => {

        $(DOMstrings.sumLabel).text(object.sum + '元');
      },

      getDOMstrings: () => {

        return DOMstrings;
      },

    };

})();

var controller = ( (m, v) => {

  let setupEventListerner = () => {

    let DOMstrings = view.getDOMstrings();

    $(DOMstrings.btn).click(addItem);

    $(document).keypress( event => {

      if (event.keycode === 13 || event.which === 13) {
        // 有些瀏覽器不支持 keycode 所以加上 which
        addItem();
      }
    });

    $(DOMstrings.container).click(deleteItem);

  };

  let deleteItem = event => {

    let itemID = event.target.parentNode.parentNode.parentNode.id;

    if (itemID == '') {
      itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
    } // 有時候會點到 button 之中的 i
    // console.log(itemID);

    model.deleteItem(itemID);

    view.deleteListItem(itemID);

    updataTotal();
  };

  let updataTotal = () => {

    let sum = model.calculateSum();
    // console.log(sum);
    view.displaySum(sum);
  };

  let addItem = () => {

    let input = view.getInfo();
    // console.log(input);

    if (input.name !== '' && !isNaN(input.value) && input.value > 0) {

      let newItem = model.addItem(input.name, input.value);

      view.addListItem(newItem);

      view.clearInput();

      updataTotal();
    }

  };

  return {

    init: () => {

      console.log('APP started.');
      view.displaySum({sum: 0});
      setupEventListerner();

    }
  }

})(model, view);



controller.init();
