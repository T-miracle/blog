import { Project } from '../type';
import rust from '@/nav/classify/rust';
import vue from '@/nav/classify/vue';
import js from '@/nav/classify/js';
import css from '@/nav/classify/css';
import other from './other';
import flutter from '@/nav/classify/flutter';
import solid from '@/nav/classify/solid';
import electron from '@/nav/classify/electron';
import react from '@/nav/classify/react';
import wx from '@/nav/classify/wx';
import design from '@/nav/classify/design';
import tool from '@/nav/classify/tool';

export default [
    ...js,
    ...css,
    ...vue,
    ...react,
    ...rust,
    ...flutter,
    ...solid,
    ...electron,
    ...wx,
    ...design,
    ...tool,
    ...other
] as Project[];
