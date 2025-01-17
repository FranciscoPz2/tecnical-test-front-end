import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { Checkbox } from '@mui/material';
import './TodoItem.css';

function TodoItem(props) {
  return (
    <div>
      <li className="TodoItem">
         
        <Checkbox
          value={props.completed}
          checked={props.completed}
          onClick={props.onComplete}
          inputProps={{
            'aria-label': 'Checkbox A',
          }}
        />
        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
          {props.text}
        </p>
        <span
          onClick={props.onDelete}
        >
        <DeleteIcon></DeleteIcon>
        </span>
      </li>
      

    </div>
  );
}

export { TodoItem };
