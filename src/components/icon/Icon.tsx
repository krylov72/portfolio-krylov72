import React from 'react';
import iconsSprite from '../../assets/images/icons-sprite.svg'
import styled from 'styled-components';

type StyledIconPropsType = {
    iconSrc: string
    width?:string
    height?:string
    viewBox?:string
    border?: string
}

export const Icon = (props:StyledIconPropsType) => {
    return (
        <svg width={props.width || '50'} height={props.height || '50'} viewBox={props.viewBox || '0 0 25 25'} preserveAspectRatio="xMinYMid" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <use xlinkHref={ `${iconsSprite}#${props.iconSrc}`} />
        </svg>
    );
};

