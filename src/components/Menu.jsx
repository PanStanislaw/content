import React from 'react';
import Input from './Input';
import { useDispatch } from 'react-redux';
import { setAdd } from '../redux/actions/addElement';
const Menu = () => {
  const dispatch = useDispatch();
  const [path, setPath] = React.useState('');
  const [value, setValue] = React.useState('');

  const onPath = (e) => {
    setPath(e.target.value);
  };

  const onValue = (e) => {
    setValue(e.target.value);
  };

  const hendlerPushAdd = () => {
    const arrPath = path.split('.');
    if (value === '') {
      alert('поле "Новое значение" должно быть заполнено');
      return;
    }
    if (arrPath[arrPath.length - 1] === ('width' || 'height')) {
      if (Number.isNaN(+value)) {
        alert('У данного свойства должно быть числовое значение');
        return;
      } else {
        dispatch(setAdd(path, value));
      }
    }
    if (arrPath[arrPath.length - 1] === 'visible') {
      if (value !== 'true' && value !== 'false') {
        alert('У данного свойства должно быть значение:"true" или "false"');
        return;
      } else {
        dispatch(setAdd(path, value));
      }
    }
    dispatch(setAdd(path, value));
  };

  return (
    <div className="menu">
      <Input eve={onPath} name={'Путь'} />
      <Input eve={onValue} name={'Новое значение'} />
      <button onClick={hendlerPushAdd} className="push">
        Применить
      </button>
    </div>
  );
};

export default Menu;
