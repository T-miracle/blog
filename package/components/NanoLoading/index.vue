<template>
    <div class="box rounded-6px">
        <div class="cat">
            <div class="cat__body"/>
            <div class="cat__body"/>
            <div class="cat__tail"/>
            <div class="cat__head"/>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
    @mixin fill-full($dir: 'full', $type: absolute) {
        position: $type;
        @if $dir != 'bottom' {top: 0; }
        @if $dir != 'right' {left: 0; }
        @if $dir != 'left' {right: 0; }
        @if $dir != 'top' {bottom: 0; }
    }

    .cat {
        position: relative;
        width: 100%;
        max-width: 16em;
        overflow: hidden;
        background-color: #e6dcdc;

        @media screen and (max-width: 768px) {
            max-width: 10em;
        }

        &::before {
            content: '';
            display: block;
            padding-bottom: 100%;
        }

        // &:hover > * { animation-play-state: paused; }
        &:active > * { animation-play-state: running; }
    }

    %cat-img {
        @include fill-full;
        animation: rotating 2.79s cubic-bezier(.65, .54, .12, .93) infinite;

        &::before {
            content: '';
            position: absolute;
            width: 50%;
            height: 50%;
            background-size: 200%;
            background-repeat: no-repeat;
            background-image: url('https://images.weserv.nl/?url=i.imgur.com/M1raXX3.png&il');
        }
    }

    .cat__head {
        @extend %cat-img;

        &::before {
            top: 0;
            right: 0;
            background-position: 100% 0%;
            transform-origin: 0% 100%;
            transform: rotate(90deg);
        }
    }

    .cat__tail {
        @extend %cat-img;
        animation-delay: .2s;

        &::before {
            left: 0;
            bottom: 0;
            background-position: 0% 100%;
            transform-origin: 100% 0%;
            transform: rotate(-30deg);
        }
    }

    .cat__body {
        @extend %cat-img;
        animation-delay: .1s;

        &:nth-of-type(2) {
            animation-delay: .2s;
        }

        &::before {
            right: 0;
            bottom: 0;
            background-position: 100% 100%;
            transform-origin: 0% 0%;
        }
    }

    @keyframes rotating {
        from { transform: rotate(720deg); }
        to { transform: none; }
    }

    .box {
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #e6dcdc;
    }
</style>
