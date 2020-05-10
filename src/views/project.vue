<template>
  <div class="project-container">
    <Header></Header>
    <div class="project-header">
      <div class="header-title-box">
        Project
      </div>
      <div class="search-box">
        <input id="search-input" placeholder="Search Project"/>
      </div>
    </div>
    <hr/>
    <div class="create-box">
      <div class="create-content">
        <div class="create-title">Create a project to get started</div>
        <div class="create-subtitle">You need a project to start the analysis.</div>
        <div class="create-btn">
          <div class="plus-icon-box">
            <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <!-- Generator: Sketch 63 (92445) - https://sketch.com -->
              <title>mdpi/icon/add</title>
              <desc>Created with Sketch.</desc>
              <g id="icon/add" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <rect id="Rectangle" fill-rule="nonzero" x="0" y="0" width="24" height="24"></rect>
                  <path d="M12.9333333,5 L12.933,11.533 L19.4666667,11.5333333 L19.4666667,12.9333333 L12.933,12.933 L12.9333333,19 L11.5333333,19 L11.533,12.933 L5,12.9333333 L5,11.5333333 L11.533,11.533 L11.5333333,5 L12.9333333,5 Z" id="Combined-Shape" fill="#f3f7fb" fill-rule="nonzero"></path>
              </g>
            </svg>
          </div>
          <div class="plus-text-box">Create a project</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header';

export default {
  name: 'project',
  components: {
    Header,
  }
}
</script>

<style scoped>
.project-container {
  width: 100%;
  height: 100vh;
  background: var(--fill-greyscale-1000);
}

.project-header {
  width: 100%;
  height: 86px;
  box-sizing: border-box;
}

.header-title-box {
  height: 100%;
  padding: 25px 0px;
  box-sizing: border-box;
  color: #dbdfe9;
  font-size: 30px;
  font-weight: 500;
  margin-left: 24px;
  float: left;
}

.search-box {
  box-sizing: border-box;
  float: right;
  height: 100%;
  padding: 22px 0px;
  margin-right: 24px;
}

#search-input {
  width: 315px;
  height: 40px;
  border-radius: 4px;
  border: solid 1px #3c3d43;
  font-size: 14px;
  color: var(--fill-greyscale-400);
  background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDYzICg5MjQ0NSkgLSBodHRwczovL3NrZXRjaC5jb20gLS0+CiAgICA8dGl0bGU+bWRwaS9pY29uL3NlYXJjaDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJpY29uL3NlYXJjaCIgc3Ryb2tlPSJub25lIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIGZpbGwtcnVsZT0ibm9uemVybyIgeD0iMCIgeT0iMCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48L3JlY3Q+CiAgICAgICAgPHBhdGggZD0iTTEwLjc1LDQgQzE0LjQ3NzkyMjEsNCAxNy41LDcuMDIyMDc3OTQgMTcuNSwxMC43NSBDMTcuNDk3NjQ1NSwxMi4zNDI4Mzg3IDE2Ljk0NDQ5NDMsMTMuODA2NDg3MyAxNi4wMjA3OTc3LDE0Ljk2MDY5NDYgTDE5Ljc1NjA3NjcsMTguNjk2NjgyOSBMMTguNjk1NDE2NSwxOS43NTczNDMxIEwxNC45NTk2ODA5LDE2LjAyMTYwODggQzEzLjgwNTYzMDQsMTYuOTQ0ODE4MSAxMi4zNDIzNzI0LDE3LjQ5NzY0NjIgMTAuNzUsMTcuNSBDNy4wMjIwNzc5NCwxNy41IDQsMTQuNDc3OTIyMSA0LDEwLjc1IEM0LDcuMDIyMDc3OTQgNy4wMjIwNzc5NCw0IDEwLjc1LDQgWiBNMTAuNzUsNS41IEM3Ljg1MDUwNTA2LDUuNSA1LjUsNy44NTA1MDUwNiA1LjUsMTAuNzUgQzUuNSwxMy42NDk0OTQ5IDcuODUwNTA1MDYsMTYgMTAuNzUsMTYgQzEzLjY0OTQ5NDksMTYgMTYsMTMuNjQ5NDk0OSAxNiwxMC43NSBDMTUuOTk0NDk3Miw3Ljg1Mjc4NzQ2IDEzLjY0NzIxMjUsNS41MDU1MDI3OSAxMC43NSw1LjUgWiIgaWQ9IkNvbWJpbmVkLVNoYXBlIiBmaWxsPSIjYTNhNmIwIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgIDwvZz4KPC9zdmc+");
  background-repeat: no-repeat;
  /* background-size: auto; */
  background-position: 5px center;
  color: var(--fill-greyscale-400);
  text-indent: 30px;
}

hr {
  border: 1px solid #34353b;
  margin: 0;
}

.create-box {
  width: 681px;
  margin: 72px auto 0px auto;
  height: 429px;
  background: url('../assets/bg_g.png') no-repeat;
  box-sizing: border-box;
}

.create-content {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 109px 141px 182px 141px;
}

.create-title {
  color: #bfc2ce;
  font-size: 30px;
  text-align: center;
}

.create-subtitle {
  color: var(--fill-greyscale-600);
  font-size: 16px;
  text-align: center;
  margin-top: 12px;
}

.create-btn {
  width: 159px;
  height: 32px;
  line-height: 33px;
  border-radius: 3px;
  background-color: var(--fill-primary-color-600);
  margin: 040px auto 0 auto;
  color: #f3f7fb;
}

.plus-icon-box {
  height: 100%;
  margin-left: 10px;
  padding: 4px 0 4px 0;
  box-sizing: border-box;
  float: left;
}

.plus-text {
  float: left;
}
</style>