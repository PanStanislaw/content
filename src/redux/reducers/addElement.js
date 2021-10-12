const initialState = {
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
};


const add = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      const value = action.payload[1];
      const path = action.payload[0].split('.');
      if (typeof obj !== 'object') {
        return {
          ...state,
          content: state.content.map((content, i) => {
            if (`content[${i}]` === path[0]) {
              return {
                ...content,
                [path[1]]: {
                  ...content[path[1]],
                  [path[2]]: value,
                },
              };
            } else {
              return {
                ...content,
              };
            }
          }),
        };

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
