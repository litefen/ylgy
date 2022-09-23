import React from 'react';
import { Theme } from '../interface';

import dadada from './sounds/哒哒哒.mp3';
import lalala from './sounds/啦啦啦.mp3';
import huoliquankai from './sounds/火力全开.mp3';
import xwnbsm from './sounds/希望能帮上忙.mp3';
import sllhcs from './sounds/神里绫华参上.mp3';
import jtgcncn from './sounds/今天该唱哪出呢.mp3';
import xkyhm from './sounds/想看烟花吗.mp3';
import czzsyz from './sounds/出征之时已至.mp3';
import zbsjjp from './sounds/走吧时间紧迫.mp3';
import gzsjdlm from './sounds/工作时间到了吗.mp3';
import bgm from './sounds/bgm.mp3';

type SoundNames =
    | '哒哒哒'
    | '啦啦啦'
    | '火力全开'
    | '希望能帮上忙'
    | '今天该唱哪出呢'
    | '神里绫华参上'
    | '想看烟花吗'
    | '出征之时已至'
    | '走吧时间紧迫'
    | '工作时间到了吗'

const pictureSoundMap: Record<string, SoundNames> = {

    ['0093']: '哒哒哒',
    ['0089']: '啦啦啦',
    ['0098']: '希望能帮上忙',
    ['004']: '神里绫华参上',
    ['0024']: '今天该唱哪出呢',
    ['0046']: '想看烟花吗',
    ['0086']: '走吧时间紧迫',
    ['0090']: '火力全开',
    ['0094']: '出征之时已至',
    ['0099']: '工作时间到了吗',
};

const sounds: { name: SoundNames; src: string }[] = [
    { name: '哒哒哒', src: dadada },
    { name: '啦啦啦', src: lalala },
    { name: '火力全开', src: huoliquankai },
    { name: '希望能帮上忙', src: xwnbsm },
    { name: '神里绫华参上', src: sllhcs },
    { name: '今天该唱哪出呢', src: jtgcncn },
    { name: '想看烟花吗', src: xkyhm },
    { name: '出征之时已至', src: czzsyz },
    { name: '走吧时间紧迫', src: zbsjjp },
    { name: '工作时间到了吗', src: gzsjdlm },

];

const imagesUrls = import.meta.glob('./images/*.jpg', {
    import: 'default',
    eager: true,
});

const icons = Object.entries(imagesUrls).map(([key, value]) => ({
    name: key.slice(9, -4),
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    content: <img src={value} alt="" />,
}));

export const genshinTheme: Theme<SoundNames> = {
    name: '原神',
    bgm,
    icons: icons.map(({ name, content }) => ({
        name,
        content,
        clickSound: pictureSoundMap[name],
        tripleSound: '啦啦啦',
    })),
    sounds,
};
