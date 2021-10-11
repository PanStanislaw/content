const initialState = {
  content: [
    {
      type: 'panel',
      props: {
        width: 500,
        height: 200,
        visible: true,
      },
      content: [
        {
          type: 'panel',
          props: {
            width: 500,
            height: 200,
            visible: true,
          },
        },
        {
          type: 'label',
          props: {
            caption: 'test',
            visible: true,
          },
        },
        {
          type: 'button',
          props: {
            caption: 'test',
            width: 100,
            height: 50,
            visible: true,
          },
        },
      ],
    },
    {
      type: 'label',
      props: {
        caption: 'test',
        visible: true,
      },
    },
    {
      type: 'button',
      props: {
        caption: 'test',
        width: 100,
        height: 50,
        visible: true,
      },
    },
  ],
};

const addElement = (arr, state) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].slice(0, -3) === 'content') {
      let newArr = arr.slice(1, arr.length - 1);
      let num = arr[i].slice(-2, -1);
      let newobj = state['content'][+num];
      return addElement(newArr, newobj);
    }
  }
  return state;
};

const add = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      const value = action.payload[1];
      const path = action.payload[0].split('.');
      const clone = JSON.parse(JSON.stringify(state));
      if (path.join() !== '') {
        //работает, но как я читал eval нежелателен для использования
        // let content = JSON.parse(JSON.stringify(state));
        // eval(action.payload[0] +'=' + value);
        // return {...state, content}

        const result = (addElement(path, clone)['props'][path[path.length - 1]] = value);
        return { ...clone };
      } else {
        const obj = new Function('return (' + value + ')')();
        return {
          ...state,
          content: [...state.content, obj],
        };
      }
    default:
      return state;
  }
};

export default add;
