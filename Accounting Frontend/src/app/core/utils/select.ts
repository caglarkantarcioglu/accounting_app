class CSelect {
  constructor() {}

  Init(selectId: string, handler: (selections: number) => void, multiple = false) {
    setTimeout(() => {
      const select = $(`#${selectId}.select2`).select2();
      select.on('select2:select', (e) => {
        if (!multiple) {
          const id = e.params.data.id;
          handler(+id);
        } else {
          const data = $(`#${selectId}.select2`).select2('data');
          handler(data.map(selectedElement => +selectedElement.id));
        }
      });
    });
  }

  Get(selectId: string): Array<number> {
    const data = $(`#${selectId}.select2`).select2('data');
    return data.map(selectedElement => +selectedElement.id);
  }

  Set(selectId: string, value: number) {
    const select = $(`#${selectId}`);
    select.val(value);
    select.trigger('change');
  }

}

const Select = new CSelect();
export default Select;
