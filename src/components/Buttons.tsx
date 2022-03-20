import * as React from 'react';
import './Buttons.scss';


export const Button = ({children})=>(<><button className="button" type="submit">{children}</button></>);

export const ButtonDisabled = ({children})=>(<><button className="button" type="submit" disabled >{children}</button></>)