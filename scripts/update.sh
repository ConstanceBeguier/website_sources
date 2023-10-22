#!/bin/bash

# https://getbootstrap.com/docs/5.0/getting-started/introduction/
BOOTSTRAP_CSS="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
BOOTSTRAP_JS="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
# https://ionic.io/ionicons/usage
IONICONS_JS="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"

OLD_BOOTSTRAP_CSS="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
OLD_BOOTSTRAP_JS="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
OLD_IONICONS_JS="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"

find . -name '*.html' -exec sed -i.bak "s#${OLD_BOOTSTRAP_CSS}#${BOOTSTRAP_CSS}#g" {} \;
find . -name '*.html' -exec sed -i.bak "s#${OLD_BOOTSTRAP_JS}#${BOOTSTRAP_JS}#g" {} \;
find . -name '*.html' -exec sed -i.bak "s#${OLD_IONICONS_JS}#${IONICONS_JS}#g" {} \;
find . -name '*.bak' -delete
