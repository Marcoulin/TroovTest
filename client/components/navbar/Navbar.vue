<template>
  <mdb-navbar expand="large" dark color="indigo">
    <mdb-navbar-brand href="#">
      Troov
    </mdb-navbar-brand>
    <mdb-navbar-toggler>
      <mdb-navbar-nav right>
        <mdb-nav-item active> <NuxtLink to="/">Déclarer un objet</NuxtLink></mdb-nav-item>
        <mdb-nav-item > <NuxtLink to="/list">Rechercher un objet</NuxtLink></mdb-nav-item>
        <mdb-btn color="success" rounded><NuxtLink to="/login">Connexion</NuxtLink></mdb-btn>
      </mdb-navbar-nav>
    </mdb-navbar-toggler>
  </mdb-navbar>
</template>

<script>
  import { mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbNavItem, mdbBtn } from 'mdbvue';
  export default {
    name: 'Navbar',
    components: {
      mdbNavbar,
      mdbNavbarBrand,
      mdbNavbarToggler,
      mdbNavbarNav,
      mdbNavItem,
      mdbBtn
    }
  }
</script>
