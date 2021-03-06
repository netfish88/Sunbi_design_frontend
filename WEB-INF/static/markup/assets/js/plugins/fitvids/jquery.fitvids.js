


<!DOCTYPE html>
<html lang="en" class="">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    
    
    <title>FitVids.js/jquery.fitvids.js at master · davatron5000/FitVids.js</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="davatron5000/FitVids.js" name="twitter:title" /><meta content="FitVids.js - A lightweight, easy-to-use jQuery plugin for fluid width video embeds." name="twitter:description" /><meta content="https://avatars2.githubusercontent.com/u/42218?v=3&amp;s=400" name="twitter:image:src" />
      <meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars2.githubusercontent.com/u/42218?v=3&amp;s=400" property="og:image" /><meta content="davatron5000/FitVids.js" property="og:title" /><meta content="https://github.com/davatron5000/FitVids.js" property="og:url" /><meta content="FitVids.js - A lightweight, easy-to-use jQuery plugin for fluid width video embeds." property="og:description" />
      <meta name="browser-stats-url" content="/_stats">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035">
    <link rel="xhr-socket" href="/_sockets">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="74257B4F:584F:C15CC9:550A4A79" name="octolytics-dimension-request_id" /><meta content="11173194" name="octolytics-actor-id" /><meta content="netfish88" name="octolytics-actor-login" /><meta content="da73703853d547b66ccd1cc1df089f459b2250402eef1132406fd78f77bda609" name="octolytics-actor-hash" />
    
    <meta content="Rails, view, blob#show" name="analytics-event" />

    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="glXzPnsBCwGdmojkutfC+dCZipBsH25LEUp4XjcMjuczTl26GvkVrd888IuUok1E/Kdf8w/UpWAUv8io7UJTWA==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-16be8cd38303fe08e97be008fdaf61e467df50fe6cb00f69dbdfeb7ea6fc6858.css" media="all" rel="stylesheet" />
    <link href="https://assets-cdn.github.com/assets/github2-8172548eea663736d3534861fd25ae79eba631ed4fdc40331b8c8e0506261182.css" media="all" rel="stylesheet" />
    
    


    <meta http-equiv="x-pjax-version" content="49d994a5d1a3779a13e550fed81abbd7">

      
  <meta name="description" content="FitVids.js - A lightweight, easy-to-use jQuery plugin for fluid width video embeds.">
  <meta name="go-import" content="github.com/davatron5000/FitVids.js git https://github.com/davatron5000/FitVids.js.git">

  <meta content="42218" name="octolytics-dimension-user_id" /><meta content="davatron5000" name="octolytics-dimension-user_login" /><meta content="2310615" name="octolytics-dimension-repository_id" /><meta content="davatron5000/FitVids.js" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="2310615" name="octolytics-dimension-repository_network_root_id" /><meta content="davatron5000/FitVids.js" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/davatron5000/FitVids.js/commits/master.atom" rel="alternate" title="Recent Commits to FitVids.js:master" type="application/atom+xml">

  </head>


  <body class="logged_in  env-production macintosh vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      


        <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


      <div class="site-search repo-scope js-site-search" role="search">
          <form accept-charset="UTF-8" action="/davatron5000/FitVids.js/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/davatron5000/FitVids.js/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <input type="text"
    class="js-site-search-field is-clearable"
    data-hotkey="s"
    name="q"
    placeholder="Search"
    data-global-scope-placeholder="Search GitHub"
    data-repo-scope-placeholder="Search"
    tabindex="1"
    autocapitalize="off">
  <div class="scope-badge">This repository</div>
</form>
      </div>
      <ul class="header-nav left" role="navigation">
        <li class="header-nav-item explore">
          <a class="header-nav-link" href="/explore" data-ga-click="Header, go to explore, text:explore">Explore</a>
        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/blog" data-ga-click="Header, go to blog, text:blog">Blog</a>
          </li>
        <li class="header-nav-item">
          <a class="header-nav-link" href="https://help.github.com" data-ga-click="Header, go to help, text:help">Help</a>
        </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name" href="/netfish88" data-ga-click="Header, go to profile, text:username">
      <img alt="@netfish88" class="avatar" data-user="11173194" height="20" src="https://avatars2.githubusercontent.com/u/11173194?v=3&amp;s=40" width="20" />
      <span class="css-truncate">
        <span class="css-truncate-target">netfish88</span>
      </span>
    </a>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link js-menu-target tooltipped tooltipped-s" href="#" aria-label="Create new..." data-ga-click="Header, create new, icon:add">
      <span class="octicon octicon-plus"></span>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      
<ul class="dropdown-menu">
  <li>
    <a href="/new" data-ga-click="Header, create new repository, icon:repo"><span class="octicon octicon-repo"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new" data-ga-click="Header, create new organization, icon:organization"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="dropdown-divider"></li>
    <li class="dropdown-header">
      <span title="davatron5000/FitVids.js">This repository</span>
    </li>
      <li>
        <a href="/davatron5000/FitVids.js/issues/new" data-ga-click="Header, create new issue, icon:issue"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

    </div>
  </li>

  <li class="header-nav-item">
        <a href="/notifications" aria-label="You have no unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s" data-ga-click="Header, go to notifications, icon:read" data-hotkey="g n">
        <span class="mail-status all-read"></span>
        <span class="octicon octicon-inbox"></span>
</a>
  </li>

  <li class="header-nav-item">
    <a class="header-nav-link tooltipped tooltipped-s" href="/settings/profile" id="account_settings" aria-label="Settings" data-ga-click="Header, go to settings, icon:settings">
      <span class="octicon octicon-gear"></span>
    </a>
  </li>

  <li class="header-nav-item">
    <form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="B7FdIXKUNpvRVTNqmo6V/twap/yLBJG39vINeASZSwLf+zQ1rp75OgGYAZV3W0Q3r0V3cNCsWBa+7Lp8X7fx+w==" /></div>
      <button class="header-nav-link sign-out-button tooltipped tooltipped-s" aria-label="Sign out" data-ga-click="Header, sign out, icon:logout">
        <span class="octicon octicon-sign-out"></span>
      </button>
</form>  </li>

</ul>


    
  </div>
</div>

        

        


      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        
<ul class="pagehead-actions">

  <li>
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="Eri734cUFdnuvISANTuTzyZJgwxRBZP3eMqlQxq3fHDXWj88CCqj6omPb0drCGjyUe0fcw0oHL5bj8kJ9AbPmQ==" /></div>    <input id="repository_id" name="repository_id" type="hidden" value="2310615" />

      <div class="select-menu js-menu-container js-select-menu">
        <a href="/davatron5000/FitVids.js/subscription"
          class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0" aria-haspopup="true"
          data-ga-click="Repository, click Watch settings, action:blob#show">
          <span class="js-select-button">
            <span class="octicon octicon-eye"></span>
            Watch
          </span>
        </a>
        <a class="social-count js-social-count" href="/davatron5000/FitVids.js/watchers">
          181
        </a>
        
        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header">
              <span class="select-menu-title">Notifications</span>
              <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
            </div>

            <div class="select-menu-list js-navigation-container" role="menu">

              <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                  <span class="select-menu-item-heading">Not watching</span>
                  <span class="description">Be notified when participating or @mentioned.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-eye"></span>
                    Watch
                  </span>
                </div>
              </div>

              <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                  <span class="select-menu-item-heading">Watching</span>
                  <span class="description">Be notified of all conversations.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-eye"></span>
                    Unwatch
                  </span>
                </div>
              </div>

              <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input id="do_ignore" name="do" type="radio" value="ignore" />
                  <span class="select-menu-item-heading">Ignoring</span>
                  <span class="description">Never be notified.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-mute"></span>
                    Stop ignoring
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <form accept-charset="UTF-8" action="/davatron5000/FitVids.js/unstar" class="js-toggler-form starred js-unstar-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="RLXGRYbMs9ctnu5viRtb5D8ccEzSabbQaVsxqYM+AMuTvHDsqOc3hdX8zdzZ/wmMj6eKSdclkH6P1r8DMMvB5A==" /></div>
      <button
        class="minibutton with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar davatron5000/FitVids.js"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/davatron5000/FitVids.js/stargazers">
          3,699
        </a>
</form>
    <form accept-charset="UTF-8" action="/davatron5000/FitVids.js/star" class="js-toggler-form unstarred js-star-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="UW651X5y5MqRny/yX5abRmNy4Z3Svyn0Rs62VDQDFtuymyIs8cKhgcZnCUTUMG/nDB1sdmaLGe4Gz+EyOQ/fmw==" /></div>
      <button
        class="minibutton with-count js-toggler-target"
        aria-label="Star this repository" title="Star davatron5000/FitVids.js"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/davatron5000/FitVids.js/stargazers">
          3,699
        </a>
</form>  </div>

  </li>

        <li>
          <a href="#fork-destination-box" class="minibutton with-count"
              title="Fork your own copy of davatron5000/FitVids.js to your account"
              aria-label="Fork your own copy of davatron5000/FitVids.js to your account"
              rel="facebox"
              data-ga-click="Repository, show fork modal, action:blob#show; text:Fork">
            <span class="octicon octicon-repo-forked"></span>
            Fork
          </a>
          <a href="/davatron5000/FitVids.js/network" class="social-count">882</a>

          <div id="fork-destination-box" style="display: none;">
            <h2 class="facebox-header">Where should we fork this repository?</h2>
            <include-fragment src=""
                class="js-fork-select-fragment fork-select-fragment"
                data-url="/davatron5000/FitVids.js/fork?fragment=1">
              <img alt="Loading" height="64" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-128-338974454bb5c32803e82f601beb051d373744b024fe8742a76009700fd7e033.gif" width="64" />
            </include-fragment>
          </div>
        </li>

</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/davatron5000" class="url fn" itemprop="url" rel="author"><span itemprop="title">davatron5000</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/davatron5000/FitVids.js" class="js-current-repository" data-pjax="#js-repo-pjax-container">FitVids.js</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            
<nav class="sunken-menu repo-nav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container"
     data-issue-count-url="/davatron5000/FitVids.js/issues/counts">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="/davatron5000/FitVids.js" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /davatron5000/FitVids.js">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Issues">
        <a href="/davatron5000/FitVids.js/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /davatron5000/FitVids.js/issues">
          <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
          <span class="js-issue-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>      </li>

    <li class="tooltipped tooltipped-w" aria-label="Pull requests">
      <a href="/davatron5000/FitVids.js/pulls" aria-label="Pull requests" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g p" data-selected-links="repo_pulls /davatron5000/FitVids.js/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull requests</span>
          <span class="js-pull-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>


      <li class="tooltipped tooltipped-w" aria-label="Wiki">
        <a href="/davatron5000/FitVids.js/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g w" data-selected-links="repo_wiki /davatron5000/FitVids.js/wiki">
          <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>      </li>
  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="/davatron5000/FitVids.js/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-selected-links="pulse /davatron5000/FitVids.js/pulse">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="/davatron5000/FitVids.js/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-selected-links="repo_graphs repo_contributors /davatron5000/FitVids.js/graphs">
        <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>
  </ul>


</nav>

              <div class="only-with-full-nav">
                  
<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/davatron5000/FitVids.js.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><span class="text-emphasized">SSH</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="git@github.com:davatron5000/FitVids.js.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/davatron5000/FitVids.js" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>



<p class="clone-options">You can clone with
  <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>, <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>, or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>

  <a href="https://mac.github.com" data-url="github-mac://openRepo/https://github.com/davatron5000/FitVids.js" class="minibutton sidebar-button js-conduit-rewrite-url" title="Save davatron5000/FitVids.js to your computer and use it in GitHub Desktop." aria-label="Save davatron5000/FitVids.js to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>


                <a href="/davatron5000/FitVids.js/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download the contents of davatron5000/FitVids.js as a zip file"
                   title="Download the contents of davatron5000/FitVids.js as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          

<a href="/davatron5000/FitVids.js/blob/cf5d482e50da670bd5e35ec52f7960dd86b28043/jquery.fitvids.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:d57ad11bb01fb933fafe895cdc4f29d8 -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu js-menu-container js-select-menu left">
  <span class="minibutton select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/davatron5000/FitVids.js/blob/develop/jquery.fitvids.js"
               data-name="develop"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="develop">
                develop
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/davatron5000/FitVids.js/blob/gh-pages/jquery.fitvids.js"
               data-name="gh-pages"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="gh-pages">
                gh-pages
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/davatron5000/FitVids.js/blob/master/jquery.fitvids.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="master">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/davatron5000/FitVids.js/tree/v1.1.0/jquery.fitvids.js"
                 data-name="v1.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1.0">v1.1.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/davatron5000/FitVids.js/tree/v1.0.3/jquery.fitvids.js"
                 data-name="v1.0.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.3">v1.0.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/davatron5000/FitVids.js/tree/v1.0.2/jquery.fitvids.js"
                 data-name="v1.0.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.2">v1.0.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/davatron5000/FitVids.js/tree/v1.0.1/jquery.fitvids.js"
                 data-name="v1.0.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.1">v1.0.1</a>
            </div>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="button-group right">
    <a href="/davatron5000/FitVids.js/find/master"
          class="js-show-file-finder minibutton empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
  </div>

  <div class="breadcrumb js-zeroclipboard-target">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/davatron5000/FitVids.js" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">FitVids.js</span></a></span></span><span class="separator">/</span><strong class="final-path">jquery.fitvids.js</strong>
  </div>
</div>


  <div class="commit file-history-tease">
    <div class="file-history-tease-header">
        <img alt="Adam Scheller" class="avatar" data-user="10998433" height="24" src="https://avatars0.githubusercontent.com/u/10998433?v=3&amp;s=48" width="24" />
        <span class="author"><a href="/AdamScheller" rel="contributor">AdamScheller</a></span>
        <time datetime="2015-02-13T20:39:06Z" is="relative-time">Feb 13, 2015</time>
        <div class="commit-title">
            <a href="/davatron5000/FitVids.js/commit/baec620e61b73bb147c8f7339f1afca5cee821d1" class="message" data-pjax="true" title="Remove illegal character causing error

Removed ) from  var videoID = &#39;fitvid&#39; + count);">Remove illegal character causing error</a>
        </div>
    </div>

    <div class="participation">
      <p class="quickstat">
        <a href="#blob_contributors_box" rel="facebox">
          <strong>17</strong>
           contributors
        </a>
      </p>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="davatron5000" href="/davatron5000/FitVids.js/commits/master/jquery.fitvids.js?author=davatron5000"><img alt="Dave Rupert" class="avatar" data-user="42218" height="20" src="https://avatars1.githubusercontent.com/u/42218?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="chriscoyier" href="/davatron5000/FitVids.js/commits/master/jquery.fitvids.js?author=chriscoyier"><img alt="Chris Coyier" class="avatar" data-user="69156" height="20" src="https://avatars2.githubusercontent.com/u/69156?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="arthurvr" href="/davatron5000/FitVids.js/commits/master/jquery.fitvids.js?author=arthurvr"><img alt="Arthur Verschaeve" class="avatar" data-user="6025224" height="20" src="https://avatars1.githubusercontent.com/u/6025224?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="kenhowardpdx" href="/davatron5000/FitVids.js/commits/master/jquery.fitvids.js?author=kenhowardpdx"><img alt="Ken Howard" class="avatar" data-user="1892667" height="20" src="https://avatars0.githubusercontent.com/u/1892667?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="elliotttf" href="/davatron5000/FitVids.js/commits/master/jquery.fitvids.js?author=elliotttf"><img alt="Elliott Foster" class="avatar" data-user="447151" height="20" src="https://avatars3.githubusercontent.com/u/447151?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="seriouslysean" href="/davatron5000/FitVids.js/commits/master/jquery.fitvids.js?author=seriouslysean"><img alt="Sean Kennedy" class="avatar" data-user="414475" height="20" src="https://avatars3.githubusercontent.com/u/414475?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="JacobBennett" href="/davatron5000/FitVids.js/commits/master/jquery.fitvids.js?author=JacobBennett"><img alt="Jacob Bennett" class="avatar" data-user="1517011" height="20" src="https://avatars1.githubusercontent.com/u/1517011?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="freakdesign" href="/davatron5000/FitVids.js/commits/master/jquery.fitvids.js?author=freakdesign"><img alt="Jason Bowman" class="avatar" data-user="1378665" height="20" src="https://avatars1.githubusercontent.com/u/1378665?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="jrobson153" href="/davatron5000/FitVids.js/commits/master/jquery.fitvids.js?author=jrobson153"><img alt="John Robson" class="avatar" data-user="6475336" height="20" src="https://avatars1.githubusercontent.com/u/6475336?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="quayzar" href="/davatron5000/FitVids.js/commits/master/jquery.fitvids.js?author=quayzar"><img alt="Ian MacKenzie" class="avatar" data-user="1156664" height="20" src="https://avatars3.githubusercontent.com/u/1156664?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="flynfish" href="/davatron5000/FitVids.js/commits/master/jquery.fitvids.js?author=flynfish"><img alt="Kyle Lamy" class="avatar" data-user="253936" height="20" src="https://avatars1.githubusercontent.com/u/253936?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="emiluzelac" href="/davatron5000/FitVids.js/commits/master/jquery.fitvids.js?author=emiluzelac"><img alt="Emil Uzelac" class="avatar" data-user="1784526" height="20" src="https://avatars2.githubusercontent.com/u/1784526?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="Krinkle" href="/davatron5000/FitVids.js/commits/master/jquery.fitvids.js?author=Krinkle"><img alt="Timo Tijhof" class="avatar" data-user="156867" height="20" src="https://avatars0.githubusercontent.com/u/156867?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="AdamScheller" href="/davatron5000/FitVids.js/commits/master/jquery.fitvids.js?author=AdamScheller"><img alt="Adam Scheller" class="avatar" data-user="10998433" height="20" src="https://avatars2.githubusercontent.com/u/10998433?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="sstarr" href="/davatron5000/FitVids.js/commits/master/jquery.fitvids.js?author=sstarr"><img alt="Simon Starr" class="avatar" data-user="18957" height="20" src="https://avatars3.githubusercontent.com/u/18957?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="mohnish" href="/davatron5000/FitVids.js/commits/master/jquery.fitvids.js?author=mohnish"><img alt="Mohnish Thallavajhula" class="avatar" data-user="138171" height="20" src="https://avatars0.githubusercontent.com/u/138171?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="adamfairholm" href="/davatron5000/FitVids.js/commits/master/jquery.fitvids.js?author=adamfairholm"><img alt="Adam Fairholm" class="avatar" data-user="298239" height="20" src="https://avatars0.githubusercontent.com/u/298239?v=3&amp;s=40" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="Dave Rupert" data-user="42218" height="24" src="https://avatars3.githubusercontent.com/u/42218?v=3&amp;s=48" width="24" />
            <a href="/davatron5000">davatron5000</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Chris Coyier" data-user="69156" height="24" src="https://avatars0.githubusercontent.com/u/69156?v=3&amp;s=48" width="24" />
            <a href="/chriscoyier">chriscoyier</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Arthur Verschaeve" data-user="6025224" height="24" src="https://avatars3.githubusercontent.com/u/6025224?v=3&amp;s=48" width="24" />
            <a href="/arthurvr">arthurvr</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Ken Howard" data-user="1892667" height="24" src="https://avatars2.githubusercontent.com/u/1892667?v=3&amp;s=48" width="24" />
            <a href="/kenhowardpdx">kenhowardpdx</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Elliott Foster" data-user="447151" height="24" src="https://avatars1.githubusercontent.com/u/447151?v=3&amp;s=48" width="24" />
            <a href="/elliotttf">elliotttf</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Sean Kennedy" data-user="414475" height="24" src="https://avatars1.githubusercontent.com/u/414475?v=3&amp;s=48" width="24" />
            <a href="/seriouslysean">seriouslysean</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Jacob Bennett" data-user="1517011" height="24" src="https://avatars3.githubusercontent.com/u/1517011?v=3&amp;s=48" width="24" />
            <a href="/JacobBennett">JacobBennett</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Jason Bowman" data-user="1378665" height="24" src="https://avatars3.githubusercontent.com/u/1378665?v=3&amp;s=48" width="24" />
            <a href="/freakdesign">freakdesign</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="John Robson" data-user="6475336" height="24" src="https://avatars3.githubusercontent.com/u/6475336?v=3&amp;s=48" width="24" />
            <a href="/jrobson153">jrobson153</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Ian MacKenzie" data-user="1156664" height="24" src="https://avatars1.githubusercontent.com/u/1156664?v=3&amp;s=48" width="24" />
            <a href="/quayzar">quayzar</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Kyle Lamy" data-user="253936" height="24" src="https://avatars3.githubusercontent.com/u/253936?v=3&amp;s=48" width="24" />
            <a href="/flynfish">flynfish</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Emil Uzelac" data-user="1784526" height="24" src="https://avatars0.githubusercontent.com/u/1784526?v=3&amp;s=48" width="24" />
            <a href="/emiluzelac">emiluzelac</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Timo Tijhof" data-user="156867" height="24" src="https://avatars2.githubusercontent.com/u/156867?v=3&amp;s=48" width="24" />
            <a href="/Krinkle">Krinkle</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Adam Scheller" data-user="10998433" height="24" src="https://avatars0.githubusercontent.com/u/10998433?v=3&amp;s=48" width="24" />
            <a href="/AdamScheller">AdamScheller</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Simon Starr" data-user="18957" height="24" src="https://avatars1.githubusercontent.com/u/18957?v=3&amp;s=48" width="24" />
            <a href="/sstarr">sstarr</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Mohnish Thallavajhula" data-user="138171" height="24" src="https://avatars2.githubusercontent.com/u/138171?v=3&amp;s=48" width="24" />
            <a href="/mohnish">mohnish</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Adam Fairholm" data-user="298239" height="24" src="https://avatars2.githubusercontent.com/u/298239?v=3&amp;s=48" width="24" />
            <a href="/adamfairholm">adamfairholm</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
    <div class="file-actions">

      <div class="button-group">
        <a href="/davatron5000/FitVids.js/raw/master/jquery.fitvids.js" class="minibutton " id="raw-url">Raw</a>
          <a href="/davatron5000/FitVids.js/blame/master/jquery.fitvids.js" class="minibutton js-update-url-with-hash">Blame</a>
        <a href="/davatron5000/FitVids.js/commits/master/jquery.fitvids.js" class="minibutton " rel="nofollow">History</a>
      </div>

        <a class="octicon-button tooltipped tooltipped-nw js-conduit-openfile-check"
           href="https://mac.github.com"
           data-url="github-mac://openRepo/https://github.com/davatron5000/FitVids.js?branch=master&amp;filepath=jquery.fitvids.js"
           aria-label="Open this file in GitHub for Mac"
           data-failed-title="Your version of GitHub for Mac is too old to open this file. Try checking for updates.">
            <span class="octicon octicon-device-desktop"></span>
        </a>

            <form accept-charset="UTF-8" action="/davatron5000/FitVids.js/edit/master/jquery.fitvids.js" class="inline-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="ZYMnY8OwgV4HyyYh98fHQBBYM4G+fIfE0s5dDZnWdNFlLXj0t3Hy2sAqKYmrbrbUYi4Xqh/OKYviXf0SEwD/HQ==" /></div>
              <button class="octicon-button tooltipped tooltipped-n" type="submit" aria-label="Clicking this button will fork this project so you can edit the file" data-hotkey="e" data-disable-with>
                <span class="octicon octicon-pencil"></span>
              </button>
</form>
          <form accept-charset="UTF-8" action="/davatron5000/FitVids.js/delete/master/jquery.fitvids.js" class="inline-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="7p4bSXUiQ9IkgxIs6BtFDXdQ4sSt3fJ61NTln1VB1i7zvrRnyhxSWjyjSqO/KJ4mo2SokyQhi2/hxDwAzFB9aA==" /></div>
            <button class="octicon-button danger tooltipped tooltipped-n" type="submit" aria-label="Fork this project and delete file" data-disable-with>
              <span class="octicon octicon-trashcan"></span>
            </button>
</form>    </div>

    <div class="file-info">
        84 lines (72 sloc)
        <span class="file-info-divider"></span>
      3.24 kb
    </div>
  </div>
  
  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size-8 js-file-line-container">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code js-file-line"><span class="pl-c">/*global jQuery */</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code js-file-line"><span class="pl-c">/*jshint browser:true */</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code js-file-line"><span class="pl-c">/*!</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code js-file-line"><span class="pl-c">* FitVids 1.1</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code js-file-line"><span class="pl-c">*</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code js-file-line"><span class="pl-c">* Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code js-file-line"><span class="pl-c">* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/</span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code js-file-line"><span class="pl-c">* Released under the WTFPL license - http://sam.zoy.org/wtfpl/</span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code js-file-line"><span class="pl-c">*</span></td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code js-file-line"><span class="pl-c">*/</span></td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code js-file-line">;(<span class="pl-st">function</span>( <span class="pl-vpf">$</span> ){</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code js-file-line">  <span class="pl-s1"><span class="pl-pds">&#39;</span>use strict<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code js-file-line">  <span class="pl-s3">$.fn</span>.<span class="pl-en">fitVids</span> <span class="pl-k">=</span> <span class="pl-st">function</span>( <span class="pl-vpf">options</span> ) {</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code js-file-line">    <span class="pl-s">var</span> settings <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code js-file-line">      customSelector<span class="pl-k">:</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code js-file-line">      ignore<span class="pl-k">:</span> <span class="pl-c1">null</span></td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code js-file-line">    <span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-s3">document</span>.<span class="pl-s3">getElementById</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>fit-vids-style<span class="pl-pds">&#39;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code js-file-line">      <span class="pl-c">// appendStyles: https://github.com/toddmotto/fluidvids/blob/master/dist/fluidvids.js</span></td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code js-file-line">      <span class="pl-s">var</span> head <span class="pl-k">=</span> <span class="pl-s3">document</span>.head <span class="pl-k">||</span> <span class="pl-s3">document</span>.<span class="pl-s3">getElementsByTagName</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>head<span class="pl-pds">&#39;</span></span>)[<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code js-file-line">      <span class="pl-s">var</span> css <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code js-file-line">      <span class="pl-s">var</span> div <span class="pl-k">=</span> <span class="pl-s3">document</span>.<span class="pl-s3">createElement</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>div<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code js-file-line">      div.innerHTML <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>&lt;p&gt;x&lt;/p&gt;&lt;style id=&quot;fit-vids-style&quot;&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> css <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>&lt;/style&gt;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code js-file-line">      head.<span class="pl-s3">appendChild</span>(div.<span class="pl-sc">childNodes</span>[<span class="pl-c1">1</span>]);</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code js-file-line">    <span class="pl-k">if</span> ( options ) {</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code js-file-line">      $.extend( settings, options );</td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code js-file-line">    <span class="pl-k">return</span> <span class="pl-v">this</span>.each(<span class="pl-st">function</span>(){</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code js-file-line">      <span class="pl-s">var</span> selectors <span class="pl-k">=</span> [</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code js-file-line">        <span class="pl-s1"><span class="pl-pds">&#39;</span>iframe[src*=&quot;player.vimeo.com&quot;]<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code js-file-line">        <span class="pl-s1"><span class="pl-pds">&#39;</span>iframe[src*=&quot;youtube.com&quot;]<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code js-file-line">        <span class="pl-s1"><span class="pl-pds">&#39;</span>iframe[src*=&quot;youtube-nocookie.com&quot;]<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code js-file-line">        <span class="pl-s1"><span class="pl-pds">&#39;</span>iframe[src*=&quot;kickstarter.com&quot;][src*=&quot;video.html&quot;]<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code js-file-line">        <span class="pl-s1"><span class="pl-pds">&#39;</span>object<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code js-file-line">        <span class="pl-s1"><span class="pl-pds">&#39;</span>embed<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code js-file-line">      ];</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code js-file-line">      <span class="pl-k">if</span> (settings.customSelector) {</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code js-file-line">        selectors.<span class="pl-s3">push</span>(settings.customSelector);</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code js-file-line">      <span class="pl-s">var</span> ignoreList <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>.fitvidsignore<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code js-file-line">      <span class="pl-k">if</span>(settings.ignore) {</td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code js-file-line">        ignoreList <span class="pl-k">=</span> ignoreList <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>, <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> settings.ignore;</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code js-file-line">      <span class="pl-s">var</span> $allVideos <span class="pl-k">=</span> $(<span class="pl-v">this</span>).<span class="pl-s3">find</span>(selectors.<span class="pl-s3">join</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>,<span class="pl-pds">&#39;</span></span>));</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code js-file-line">      $allVideos <span class="pl-k">=</span> $allVideos.not(<span class="pl-s1"><span class="pl-pds">&#39;</span>object object<span class="pl-pds">&#39;</span></span>); <span class="pl-c">// SwfObj conflict patch</span></td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code js-file-line">      $allVideos <span class="pl-k">=</span> $allVideos.not(ignoreList); <span class="pl-c">// Disable FitVids on this video.</span></td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code js-file-line">      $allVideos.each(<span class="pl-st">function</span>(<span class="pl-vpf">count</span>){</td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code js-file-line">        <span class="pl-s">var</span> $<span class="pl-v">this</span> <span class="pl-k">=</span> $(<span class="pl-v">this</span>);</td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code js-file-line">        <span class="pl-k">if</span>($<span class="pl-v">this</span>.parents(ignoreList).<span class="pl-sc">length</span> <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code js-file-line">          <span class="pl-k">return</span>; <span class="pl-c">// Disable FitVids on this video.</span></td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code js-file-line">        <span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-sc">tagName</span>.<span class="pl-s3">toLowerCase</span>() <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>embed<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> $<span class="pl-v">this</span>.<span class="pl-sc">parent</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>object<span class="pl-pds">&#39;</span></span>).<span class="pl-sc">length</span> <span class="pl-k">||</span> $<span class="pl-v">this</span>.<span class="pl-sc">parent</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>.fluid-width-video-wrapper<span class="pl-pds">&#39;</span></span>).<span class="pl-sc">length</span>) { <span class="pl-k">return</span>; }</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code js-file-line">        <span class="pl-k">if</span> ((<span class="pl-k">!</span>$<span class="pl-v">this</span>.css(<span class="pl-s1"><span class="pl-pds">&#39;</span>height<span class="pl-pds">&#39;</span></span>) <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>$<span class="pl-v">this</span>.css(<span class="pl-s1"><span class="pl-pds">&#39;</span>width<span class="pl-pds">&#39;</span></span>)) <span class="pl-k">&amp;&amp;</span> (<span class="pl-s3">isNaN</span>($<span class="pl-v">this</span>.attr(<span class="pl-s1"><span class="pl-pds">&#39;</span>height<span class="pl-pds">&#39;</span></span>)) <span class="pl-k">||</span> <span class="pl-s3">isNaN</span>($<span class="pl-v">this</span>.attr(<span class="pl-s1"><span class="pl-pds">&#39;</span>width<span class="pl-pds">&#39;</span></span>))))</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code js-file-line">        {</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code js-file-line">          $<span class="pl-v">this</span>.attr(<span class="pl-s1"><span class="pl-pds">&#39;</span>height<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">9</span>);</td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code js-file-line">          $<span class="pl-v">this</span>.attr(<span class="pl-s1"><span class="pl-pds">&#39;</span>width<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code js-file-line">        <span class="pl-s">var</span> height <span class="pl-k">=</span> ( <span class="pl-v">this</span>.<span class="pl-sc">tagName</span>.<span class="pl-s3">toLowerCase</span>() <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>object<span class="pl-pds">&#39;</span></span> <span class="pl-k">||</span> ($<span class="pl-v">this</span>.attr(<span class="pl-s1"><span class="pl-pds">&#39;</span>height<span class="pl-pds">&#39;</span></span>) <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-s3">isNaN</span>(<span class="pl-s3">parseInt</span>($<span class="pl-v">this</span>.attr(<span class="pl-s1"><span class="pl-pds">&#39;</span>height<span class="pl-pds">&#39;</span></span>), <span class="pl-c1">10</span>))) ) <span class="pl-k">?</span> <span class="pl-s3">parseInt</span>($<span class="pl-v">this</span>.attr(<span class="pl-s1"><span class="pl-pds">&#39;</span>height<span class="pl-pds">&#39;</span></span>), <span class="pl-c1">10</span>) <span class="pl-k">:</span> $<span class="pl-v">this</span>.<span class="pl-sc">height</span>(),</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code js-file-line">            width <span class="pl-k">=</span> <span class="pl-k">!</span><span class="pl-s3">isNaN</span>(<span class="pl-s3">parseInt</span>($<span class="pl-v">this</span>.attr(<span class="pl-s1"><span class="pl-pds">&#39;</span>width<span class="pl-pds">&#39;</span></span>), <span class="pl-c1">10</span>)) <span class="pl-k">?</span> <span class="pl-s3">parseInt</span>($<span class="pl-v">this</span>.attr(<span class="pl-s1"><span class="pl-pds">&#39;</span>width<span class="pl-pds">&#39;</span></span>), <span class="pl-c1">10</span>) <span class="pl-k">:</span> $<span class="pl-v">this</span>.<span class="pl-sc">width</span>(),</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code js-file-line">            aspectRatio <span class="pl-k">=</span> height / width;</td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code js-file-line">        <span class="pl-k">if</span>(<span class="pl-k">!</span>$<span class="pl-v">this</span>.attr(<span class="pl-s1"><span class="pl-pds">&#39;</span>id<span class="pl-pds">&#39;</span></span>)){</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code js-file-line">          <span class="pl-s">var</span> videoID <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>fitvid<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> count;</td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code js-file-line">          $<span class="pl-v">this</span>.attr(<span class="pl-s1"><span class="pl-pds">&#39;</span>id<span class="pl-pds">&#39;</span></span>, videoID);</td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code js-file-line">        $<span class="pl-v">this</span>.wrap(<span class="pl-s1"><span class="pl-pds">&#39;</span>&lt;div class=&quot;fluid-width-video-wrapper&quot;&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span>).<span class="pl-sc">parent</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>.fluid-width-video-wrapper<span class="pl-pds">&#39;</span></span>).css(<span class="pl-s1"><span class="pl-pds">&#39;</span>padding-top<span class="pl-pds">&#39;</span></span>, (aspectRatio <span class="pl-k">*</span> <span class="pl-c1">100</span>)<span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&#39;</span>%<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code js-file-line">        $<span class="pl-v">this</span>.removeAttr(<span class="pl-s1"><span class="pl-pds">&#39;</span>height<span class="pl-pds">&#39;</span></span>).removeAttr(<span class="pl-s1"><span class="pl-pds">&#39;</span>width<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code js-file-line"><span class="pl-c">// Works with either jQuery or Zepto</span></td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code js-file-line">})( <span class="pl-s3">window</span>.jQuery <span class="pl-k">||</span> <span class="pl-s3">window</span>.Zepto );</td>
      </tr>
</table>

  </div>

</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2015 <span title="0.05048s from github-fe142-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
    </ul>
  </div>
</div>


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder=""></textarea>
      <div class="suggester-container">
        <div class="suggester fullscreen-suggester js-suggester js-navigation-container"></div>
      </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    
    

    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x flash-close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-d2f4f76d6a05f07ed67ef9f94d3823b34f98232770518bc7f8f40de8846ec511.js"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-2205ba936bc97f0feb06beea9b587efca7144fb60fed3601a636ae757d384cdd.js"></script>
      
      

  </body>
</html>

