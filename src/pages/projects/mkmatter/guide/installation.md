---
layout: ../../../../layouts/Page.astro
title: Installation
breadcrumb: Installation
categories:
- Jekyll
- mkmatter
- Installation
tags:
- mkmatter
- installation
date: '2018-03-04 06:52:40 -0500'
---
<div class="float-right card bg-dark ml-4 mr-2">

# Contents

* TOC
{:toc class="well bg-dark d-inline-block pr-3 py-2"}
</div>

<div>

# Installation
To install 'mkmatter', do the following.

<dl>
  <dt>Note</dt>
  <dd>
  If you decide to help work on 'mkmatter' then please note that
  development is done by executing mkmatter through bundler, then
  mkmatter is released. If there are library problems when installing
  either way.. Then submit an issue <a href="https://github.com/IotaSpencer/mkmatter/issues">here</a>.

  Please include any tracebacks and the output of `mkmatter --debug`{: .highlight }
  </dd>
</dl>

## To Share or not To Share

<div class="d-flex">

* ### User Install

  `$ gem install --user-install mkmatter`{: .highlight .d-block}

* ### System-wide Install

  `$ sudo gem install mkmatter`{: .highlight .d-block}
  `$ gem install mkmatter`{: .highlight .d-block}
</div>

------

Doing such will install mkmatter and all its needed gems to whichever path is applicable for the width of its installation.
This most likely will include 'micro-install' a script that 'one-stop-shop' installs 'micro' a terminal text editor. 'micro' will be used by default if installed, unless `--editor=EDITORCOMMAND`{: .highlight } is provided.
</div>
