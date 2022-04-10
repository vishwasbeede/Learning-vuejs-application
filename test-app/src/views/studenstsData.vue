<template>
<div>


<div class="p-3 text-white bg-dark sidenav">
    <a href="/students" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <span class="fs-4">ET tools</span>
    </a>
    <hr>
    <ul class="nav flex-column mb-auto">
      <li class="nav-item">
        <a href="#" class="nav-link text-white" aria-current="page">
          Home
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          Dashboard
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          Orders
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          Products
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          Customers
        </a>
      </li>
    </ul>
    <hr>
</div>

<div class="border-primary main" style="width: 80%;">
<div class="card-sm card-md mx-auto text-white bg-dark" >
     <h5 class="card-title py-3"><strong>EA run execution dashboard</strong></h5>      
  <div class="container-sm text-dark bg-white py-1">
    <div class="row">
      <div class="col-md col-md">
        <div class="row px-1 py-1">
          <div class="col">
            <label for="frm"><pre>E-mail(from) </pre></label>
          </div>
          <div class="col">
            <input
              type="email"
              name="frm"
              id="frm"
              class="form-control"
              placeholder="mail-id from addrerss"
            />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label for="tomail"><pre>E-mail(to) </pre></label>
          </div>
          <div class="col">
            <input
              type="email"
              name="tomail"
              id="tomail"
              class="form-control "
              placeholder="mail-id to addrerss"
            />
          </div>
        </div>

        <div class="row">
          <div class="col">
            <label for="mailbox"><pre>Mail-Box</pre></label>
          </div>
          <div class="col">
            <input
              type="email"
              name="mailbox"
              id="mailbox"
              class="form-control"
              placeholder="Mail-Box mail addrerss"
            />
          </div>
        </div>
      </div>
            <div class="col py-2 ">
        <label for="StartDate">Search start :&nbsp;</label>
        <input
          type="datetime-local"
          name="StartDate"
          id="StartDate"
          class="form-group mx-auto"
          style="width: 50%"
        />
        <div class="row"><br /></div>
        <label for="EndDate">Search end :&nbsp;</label>
        <input
          type="datetime-local"
          name="EndDate"
          id="EndDate"
          class="form-group mx-auto"
          style="width: 50%"
        />
      </div>
    </div>

    <div class="row ">
        <div class="row ">
          <div class="col mx-auto ">
            <label for="mailSub" > Mail subject:&nbsp;</label>
            <input
              type="text"
              name="mailSub"
              id="mailSub"
              class="form-group border-round"
              placeholder="mail subject"
            />
          </div>
          <div class="col mx-auto">    
                <label for="jobid"> Job ID:&nbsp;</label>
            <input type="number" class="form-group border-round" name="jobid" id="jobid" placeholder="job id" />
          </div>
        </div>
      </div>

    <br>
  </div>
    <input type="button" class="btn btn-secondary text-light py-2" value="Search">
</div>

</div>
</div>
</template>
<script>
// import 'jquery/dist/jquery.min.js';
//import $ from 'jquery'; 

</script>

<style>
.sidenav{
  height: 100%;
  width:150px;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 0px;
}
.sidenav a:hover {
  color: #f1f1f1;
}
.main {
  margin-left: 150px; 
  padding: 0px 10px;
}

</style>

