<template>
  <RouterView />
</template>

<style>
  body {
    margin: 0 auto;
    max-width: 1920px;
    overflow-x: clip;
    overflow-x: hidden;
  }

  div.app {
    overflow: clip;
    overflow-x: hidden;
  }

  ::selection {
    filter: invert(100%);
  }

  ::-moz-selection {
    filter: invert(100%);
  }
</style>
