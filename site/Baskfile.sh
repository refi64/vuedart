shopt -s extglob


task_default() {
  bask_log_error "No default task."
  false
}


task_pygments() {
  pygmentize -S friendly -f html -a .highlight > web/dist/pygments.css
}


task_pack_debug() {
  bask_depends pygments
  aspen
}


task_pack_release() {
  bask_depends pygments
  aspen -m prod
}

task_build_debug() {
  bask_depends pack_debug
  pub build --mode debug
}

task_build_release() {
  bask_depends pack_release
  pub build --mode release
}
