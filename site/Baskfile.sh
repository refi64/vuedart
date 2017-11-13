shopt -s extglob


task_default() {
  bask_log_error "No default task."
  false
}


pack() {
  mkdir -p web/dist
  local mode="$1"

  if [ "$mode" == "debug" ]; then
    local vue=vue.js
    local vuematerial=vue-material.debug.js
  else
    local vue=vue.min.js
    local vuematerial=vue-material.js
  fi

  cat node_modules/vue/dist/$vue node_modules/vue-material/dist/$vuematerial > \
    web/dist/pack.js
  cat node_modules/vue-material/dist/vue-material.css web/dist/pygments.css > \
    web/dist/pack.css
}


task_pygments() {
  pygmentize -S friendly -f html -a .highlight > web/dist/pygments.css
}


task_pack_debug() {
  bask_depends pygments
  pack debug
}


task_pack_release() {
  bask_depends pygments
  pack release
}

task_build_debug() {
  bask_depends pack_debug
  pub build --mode debug
}

task_build_release() {
  bask_depends pack_release
  pub build --mode release
}
