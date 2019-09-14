<template>
  <div>
    <ul id="dropdown" class="dropdown-content">
      <li><router-link class="black-text" to="/">Top</router-link></li>
      <li><router-link class="black-text" to="/about">About</router-link></li>
      <li><router-link class="black-text" to="/contact">Contact</router-link></li>
    </ul>
    <nav class="grey lighten-4">
      <div class="nav-wrapper container">
        <a href="/" class="brand-logo left black-text">Todo</a>
        <ul class="right hide-on-med-and-down">
          <li><router-link class="black-text" to="/">Top</router-link></li>
          <li><router-link class="black-text" to="/about">About</router-link></li>
          <li><router-link class="black-text" to="/contact">Contact</router-link></li>
        </ul>
        <ul class="right hide-on-large-only">
          <li>
            <a class="dropdown-button black-text" href="#!" data-activates="dropdown">
              Menu<i class="material-icons right">arrow_drop_down</i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>