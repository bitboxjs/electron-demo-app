!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in p||(p[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==v.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=p[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(v.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=p[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return x[e]||(x[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},r.name);t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=p[s],v=x[s];v?l=v.exports:c&&!c.declarative?l=c.esModule:c?(d(c),v=c.module,l=v.exports):l=f(s),v&&v.importers?(v.importers.push(t),t.dependencies.push(v)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=p[e];if(t)t.declarative?c(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=f(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=p[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){if(r===e)return r;var t={};if("object"==typeof r||"function"==typeof r)if(g){var n;for(var o in r)(n=Object.getOwnPropertyDescriptor(r,o))&&h(t,o,n)}else{var a=r&&r.hasOwnProperty;for(var o in r)(!a||r.hasOwnProperty(o))&&(t[o]=r[o])}return t["default"]=r,h(t,"__useDefault",{value:!0}),t}function c(r,t){var n=p[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==v.call(t,u)&&(p[u]?c(u,t):f(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function f(e){if(D[e])return D[e];if("@node/"==e.substr(0,6))return y(e.substr(6));var r=p[e];if(!r)throw"Module "+e+" not present.";return a(e),c(e,[]),p[e]=void 0,r.declarative&&h(r.module.exports,"__esModule",{value:!0}),D[e]=r.declarative?r.module.exports:r.esModule}var p={},v=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},g=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(m){g=!1}var h;!function(){try{Object.defineProperty({},"a",{})&&(h=Object.defineProperty)}catch(e){h=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var x={},y="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,D={"@empty":{}};return function(e,n,o){return function(a){a(function(a){for(var u={_nodeRequire:y,register:r,registerDynamic:t,get:f,set:function(e,r){D[e]=r},newModule:function(e){return e}},d=0;d<n.length;d++)(function(e,r){r&&r.__esModule?D[e]=r:D[e]=s(r)})(n[d],arguments[d]);o(u);var i=f(e[0]);if(e.length>1)for(var d=1;d<e.length;d++)f(e[d]);return i.__useDefault?i["default"]:i})}}}("undefined"!=typeof self?self:global)

(["1"], [], function($__System) {

$__System.registerDynamic("2", ["3", "4"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var VNode = $__require('3');
  var is = $__require('4');
  function addNS(data, children) {
    data.ns = 'http://www.w3.org/2000/svg';
    if (children !== undefined) {
      for (var i = 0; i < children.length; ++i) {
        addNS(children[i].data, children[i].children);
      }
    }
  }
  module.exports = function h(sel, b, c) {
    var data = {},
        children,
        text,
        i;
    if (arguments.length === 3) {
      data = b;
      if (is.array(c)) {
        children = c;
      } else if (is.primitive(c)) {
        text = c;
      }
    } else if (arguments.length === 2) {
      if (is.array(b)) {
        children = b;
      } else if (is.primitive(b)) {
        text = b;
      } else {
        data = b;
      }
    }
    if (is.array(children)) {
      for (i = 0; i < children.length; ++i) {
        if (is.primitive(children[i]))
          children[i] = VNode(undefined, undefined, undefined, children[i]);
      }
    }
    if (sel[0] === 's' && sel[1] === 'v' && sel[2] === 'g') {
      addNS(data, children);
    }
    return VNode(sel, data, children, text, undefined);
  };
  return module.exports;
});

$__System.registerDynamic("3", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(sel, data, children, text, elm) {
    var key = data === undefined ? undefined : data.key;
    return {
      sel: sel,
      data: data,
      children: children,
      text: text,
      elm: elm,
      key: key
    };
  };
  return module.exports;
});

$__System.registerDynamic("5", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  function createElement(tagName) {
    return document.createElement(tagName);
  }
  function createElementNS(namespaceURI, qualifiedName) {
    return document.createElementNS(namespaceURI, qualifiedName);
  }
  function createTextNode(text) {
    return document.createTextNode(text);
  }
  function insertBefore(parentNode, newNode, referenceNode) {
    parentNode.insertBefore(newNode, referenceNode);
  }
  function removeChild(node, child) {
    node.removeChild(child);
  }
  function appendChild(node, child) {
    node.appendChild(child);
  }
  function parentNode(node) {
    return node.parentElement;
  }
  function nextSibling(node) {
    return node.nextSibling;
  }
  function tagName(node) {
    return node.tagName;
  }
  function setTextContent(node, text) {
    node.textContent = text;
  }
  module.exports = {
    createElement: createElement,
    createElementNS: createElementNS,
    createTextNode: createTextNode,
    appendChild: appendChild,
    removeChild: removeChild,
    insertBefore: insertBefore,
    parentNode: parentNode,
    nextSibling: nextSibling,
    tagName: tagName,
    setTextContent: setTextContent
  };
  return module.exports;
});

$__System.registerDynamic("6", ["3", "4", "5"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var VNode = $__require('3');
  var is = $__require('4');
  var domApi = $__require('5');
  function isUndef(s) {
    return s === undefined;
  }
  function isDef(s) {
    return s !== undefined;
  }
  var emptyNode = VNode('', {}, [], undefined, undefined);
  function sameVnode(vnode1, vnode2) {
    return vnode1.key === vnode2.key && vnode1.sel === vnode2.sel;
  }
  function createKeyToOldIdx(children, beginIdx, endIdx) {
    var i,
        map = {},
        key;
    for (i = beginIdx; i <= endIdx; ++i) {
      key = children[i].key;
      if (isDef(key))
        map[key] = i;
    }
    return map;
  }
  var hooks = ['create', 'update', 'remove', 'destroy', 'pre', 'post'];
  function init(modules, api) {
    var i,
        j,
        cbs = {};
    if (isUndef(api))
      api = domApi;
    for (i = 0; i < hooks.length; ++i) {
      cbs[hooks[i]] = [];
      for (j = 0; j < modules.length; ++j) {
        if (modules[j][hooks[i]] !== undefined)
          cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
    function emptyNodeAt(elm) {
      return VNode(api.tagName(elm).toLowerCase(), {}, [], undefined, elm);
    }
    function createRmCb(childElm, listeners) {
      return function() {
        if (--listeners === 0) {
          var parent = api.parentNode(childElm);
          api.removeChild(parent, childElm);
        }
      };
    }
    function createElm(vnode, insertedVnodeQueue) {
      var i,
          thunk,
          data = vnode.data;
      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.init))
          i(vnode);
        if (isDef(i = data.vnode)) {
          thunk = vnode;
          vnode = i;
        }
      }
      var elm,
          children = vnode.children,
          sel = vnode.sel;
      if (isDef(sel)) {
        var hashIdx = sel.indexOf('#');
        var dotIdx = sel.indexOf('.', hashIdx);
        var hash = hashIdx > 0 ? hashIdx : sel.length;
        var dot = dotIdx > 0 ? dotIdx : sel.length;
        var tag = hashIdx !== -1 || dotIdx !== -1 ? sel.slice(0, Math.min(hash, dot)) : sel;
        elm = vnode.elm = isDef(data) && isDef(i = data.ns) ? api.createElementNS(i, tag) : api.createElement(tag);
        if (hash < dot)
          elm.id = sel.slice(hash + 1, dot);
        if (dotIdx > 0)
          elm.className = sel.slice(dot + 1).replace(/\./g, ' ');
        if (is.array(children)) {
          for (i = 0; i < children.length; ++i) {
            api.appendChild(elm, createElm(children[i], insertedVnodeQueue));
          }
        } else if (is.primitive(vnode.text)) {
          api.appendChild(elm, api.createTextNode(vnode.text));
        }
        for (i = 0; i < cbs.create.length; ++i)
          cbs.create[i](emptyNode, vnode);
        i = vnode.data.hook;
        if (isDef(i)) {
          if (i.create)
            i.create(emptyNode, vnode);
          if (i.insert)
            insertedVnodeQueue.push(vnode);
        }
      } else {
        elm = vnode.elm = api.createTextNode(vnode.text);
      }
      if (isDef(thunk))
        thunk.elm = vnode.elm;
      return vnode.elm;
    }
    function addVnodes(parentElm, before, vnodes, startIdx, endIdx, insertedVnodeQueue) {
      for (; startIdx <= endIdx; ++startIdx) {
        api.insertBefore(parentElm, createElm(vnodes[startIdx], insertedVnodeQueue), before);
      }
    }
    function invokeDestroyHook(vnode) {
      var i,
          j,
          data = vnode.data;
      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.destroy))
          i(vnode);
        for (i = 0; i < cbs.destroy.length; ++i)
          cbs.destroy[i](vnode);
        if (isDef(i = vnode.children)) {
          for (j = 0; j < vnode.children.length; ++j) {
            invokeDestroyHook(vnode.children[j]);
          }
        }
        if (isDef(i = data.vnode))
          invokeDestroyHook(i);
      }
    }
    function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
      for (; startIdx <= endIdx; ++startIdx) {
        var i,
            listeners,
            rm,
            ch = vnodes[startIdx];
        if (isDef(ch)) {
          if (isDef(ch.sel)) {
            invokeDestroyHook(ch);
            listeners = cbs.remove.length + 1;
            rm = createRmCb(ch.elm, listeners);
            for (i = 0; i < cbs.remove.length; ++i)
              cbs.remove[i](ch, rm);
            if (isDef(i = ch.data) && isDef(i = i.hook) && isDef(i = i.remove)) {
              i(ch, rm);
            } else {
              rm();
            }
          } else {
            api.removeChild(parentElm, ch.elm);
          }
        }
      }
    }
    function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue) {
      var oldStartIdx = 0,
          newStartIdx = 0;
      var oldEndIdx = oldCh.length - 1;
      var oldStartVnode = oldCh[0];
      var oldEndVnode = oldCh[oldEndIdx];
      var newEndIdx = newCh.length - 1;
      var newStartVnode = newCh[0];
      var newEndVnode = newCh[newEndIdx];
      var oldKeyToIdx,
          idxInOld,
          elmToMove,
          before;
      while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        if (isUndef(oldStartVnode)) {
          oldStartVnode = oldCh[++oldStartIdx];
        } else if (isUndef(oldEndVnode)) {
          oldEndVnode = oldCh[--oldEndIdx];
        } else if (sameVnode(oldStartVnode, newStartVnode)) {
          patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
          oldStartVnode = oldCh[++oldStartIdx];
          newStartVnode = newCh[++newStartIdx];
        } else if (sameVnode(oldEndVnode, newEndVnode)) {
          patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
          oldEndVnode = oldCh[--oldEndIdx];
          newEndVnode = newCh[--newEndIdx];
        } else if (sameVnode(oldStartVnode, newEndVnode)) {
          patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
          api.insertBefore(parentElm, oldStartVnode.elm, api.nextSibling(oldEndVnode.elm));
          oldStartVnode = oldCh[++oldStartIdx];
          newEndVnode = newCh[--newEndIdx];
        } else if (sameVnode(oldEndVnode, newStartVnode)) {
          patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
          api.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
          oldEndVnode = oldCh[--oldEndIdx];
          newStartVnode = newCh[++newStartIdx];
        } else {
          if (isUndef(oldKeyToIdx))
            oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
          idxInOld = oldKeyToIdx[newStartVnode.key];
          if (isUndef(idxInOld)) {
            api.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
            newStartVnode = newCh[++newStartIdx];
          } else {
            elmToMove = oldCh[idxInOld];
            patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            api.insertBefore(parentElm, elmToMove.elm, oldStartVnode.elm);
            newStartVnode = newCh[++newStartIdx];
          }
        }
      }
      if (oldStartIdx > oldEndIdx) {
        before = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
        addVnodes(parentElm, before, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
      } else if (newStartIdx > newEndIdx) {
        removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
      }
    }
    function patchVnode(oldVnode, vnode, insertedVnodeQueue) {
      var i,
          hook;
      if (isDef(i = vnode.data) && isDef(hook = i.hook) && isDef(i = hook.prepatch)) {
        i(oldVnode, vnode);
      }
      if (isDef(i = oldVnode.data) && isDef(i = i.vnode))
        oldVnode = i;
      if (isDef(i = vnode.data) && isDef(i = i.vnode)) {
        patchVnode(oldVnode, i, insertedVnodeQueue);
        vnode.elm = i.elm;
        return;
      }
      var elm = vnode.elm = oldVnode.elm,
          oldCh = oldVnode.children,
          ch = vnode.children;
      if (oldVnode === vnode)
        return;
      if (!sameVnode(oldVnode, vnode)) {
        var parentElm = api.parentNode(oldVnode.elm);
        elm = createElm(vnode, insertedVnodeQueue);
        api.insertBefore(parentElm, elm, oldVnode.elm);
        removeVnodes(parentElm, [oldVnode], 0, 0);
        return;
      }
      if (isDef(vnode.data)) {
        for (i = 0; i < cbs.update.length; ++i)
          cbs.update[i](oldVnode, vnode);
        i = vnode.data.hook;
        if (isDef(i) && isDef(i = i.update))
          i(oldVnode, vnode);
      }
      if (isUndef(vnode.text)) {
        if (isDef(oldCh) && isDef(ch)) {
          if (oldCh !== ch)
            updateChildren(elm, oldCh, ch, insertedVnodeQueue);
        } else if (isDef(ch)) {
          if (isDef(oldVnode.text))
            api.setTextContent(elm, '');
          addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
        } else if (isDef(oldCh)) {
          removeVnodes(elm, oldCh, 0, oldCh.length - 1);
        } else if (isDef(oldVnode.text)) {
          api.setTextContent(elm, '');
        }
      } else if (oldVnode.text !== vnode.text) {
        api.setTextContent(elm, vnode.text);
      }
      if (isDef(hook) && isDef(i = hook.postpatch)) {
        i(oldVnode, vnode);
      }
    }
    return function(oldVnode, vnode) {
      var i,
          elm,
          parent;
      var insertedVnodeQueue = [];
      for (i = 0; i < cbs.pre.length; ++i)
        cbs.pre[i]();
      if (isUndef(oldVnode.sel)) {
        oldVnode = emptyNodeAt(oldVnode);
      }
      if (sameVnode(oldVnode, vnode)) {
        patchVnode(oldVnode, vnode, insertedVnodeQueue);
      } else {
        elm = oldVnode.elm;
        parent = api.parentNode(elm);
        createElm(vnode, insertedVnodeQueue);
        if (parent !== null) {
          api.insertBefore(parent, vnode.elm, api.nextSibling(elm));
          removeVnodes(parent, [oldVnode], 0, 0);
        }
      }
      for (i = 0; i < insertedVnodeQueue.length; ++i) {
        insertedVnodeQueue[i].data.hook.insert(insertedVnodeQueue[i]);
      }
      for (i = 0; i < cbs.post.length; ++i)
        cbs.post[i]();
      return vnode;
    };
  }
  module.exports = {init: init};
  return module.exports;
});

$__System.registerDynamic("7", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  function updateClass(oldVnode, vnode) {
    var cur,
        name,
        elm = vnode.elm,
        oldClass = oldVnode.data.class || {},
        klass = vnode.data.class || {};
    for (name in oldClass) {
      if (!klass[name]) {
        elm.classList.remove(name);
      }
    }
    for (name in klass) {
      cur = klass[name];
      if (cur !== oldClass[name]) {
        elm.classList[cur ? 'add' : 'remove'](name);
      }
    }
  }
  module.exports = {
    create: updateClass,
    update: updateClass
  };
  return module.exports;
});

$__System.registerDynamic("8", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  function updateProps(oldVnode, vnode) {
    var key,
        cur,
        old,
        elm = vnode.elm,
        oldProps = oldVnode.data.props || {},
        props = vnode.data.props || {};
    for (key in oldProps) {
      if (!props[key]) {
        delete elm[key];
      }
    }
    for (key in props) {
      cur = props[key];
      old = oldProps[key];
      if (old !== cur && (key !== 'value' || elm[key] !== cur)) {
        elm[key] = cur;
      }
    }
  }
  module.exports = {
    create: updateProps,
    update: updateProps
  };
  return module.exports;
});

$__System.registerDynamic("9", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var booleanAttrs = ["allowfullscreen", "async", "autofocus", "autoplay", "checked", "compact", "controls", "declare", "default", "defaultchecked", "defaultmuted", "defaultselected", "defer", "disabled", "draggable", "enabled", "formnovalidate", "hidden", "indeterminate", "inert", "ismap", "itemscope", "loop", "multiple", "muted", "nohref", "noresize", "noshade", "novalidate", "nowrap", "open", "pauseonexit", "readonly", "required", "reversed", "scoped", "seamless", "selected", "sortable", "spellcheck", "translate", "truespeed", "typemustmatch", "visible"];
  var booleanAttrsDict = {};
  for (var i = 0,
      len = booleanAttrs.length; i < len; i++) {
    booleanAttrsDict[booleanAttrs[i]] = true;
  }
  function updateAttrs(oldVnode, vnode) {
    var key,
        cur,
        old,
        elm = vnode.elm,
        oldAttrs = oldVnode.data.attrs || {},
        attrs = vnode.data.attrs || {};
    for (key in attrs) {
      cur = attrs[key];
      old = oldAttrs[key];
      if (old !== cur) {
        if (!cur && booleanAttrsDict[key])
          elm.removeAttribute(key);
        else
          elm.setAttribute(key, cur);
      }
    }
    for (key in oldAttrs) {
      if (!(key in attrs)) {
        elm.removeAttribute(key);
      }
    }
  }
  module.exports = {
    create: updateAttrs,
    update: updateAttrs
  };
  return module.exports;
});

$__System.registerDynamic("a", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var raf = (typeof window !== 'undefined' && window.requestAnimationFrame) || setTimeout;
  var nextFrame = function(fn) {
    raf(function() {
      raf(fn);
    });
  };
  function setNextFrame(obj, prop, val) {
    nextFrame(function() {
      obj[prop] = val;
    });
  }
  function updateStyle(oldVnode, vnode) {
    var cur,
        name,
        elm = vnode.elm,
        oldStyle = oldVnode.data.style || {},
        style = vnode.data.style || {},
        oldHasDel = 'delayed' in oldStyle;
    for (name in oldStyle) {
      if (!style[name]) {
        elm.style[name] = '';
      }
    }
    for (name in style) {
      cur = style[name];
      if (name === 'delayed') {
        for (name in style.delayed) {
          cur = style.delayed[name];
          if (!oldHasDel || cur !== oldStyle.delayed[name]) {
            setNextFrame(elm.style, name, cur);
          }
        }
      } else if (name !== 'remove' && cur !== oldStyle[name]) {
        elm.style[name] = cur;
      }
    }
  }
  function applyDestroyStyle(vnode) {
    var style,
        name,
        elm = vnode.elm,
        s = vnode.data.style;
    if (!s || !(style = s.destroy))
      return;
    for (name in style) {
      elm.style[name] = style[name];
    }
  }
  function applyRemoveStyle(vnode, rm) {
    var s = vnode.data.style;
    if (!s || !s.remove) {
      rm();
      return;
    }
    var name,
        elm = vnode.elm,
        idx,
        i = 0,
        maxDur = 0,
        compStyle,
        style = s.remove,
        amount = 0,
        applied = [];
    for (name in style) {
      applied.push(name);
      elm.style[name] = style[name];
    }
    compStyle = getComputedStyle(elm);
    var props = compStyle['transition-property'].split(', ');
    for (; i < props.length; ++i) {
      if (applied.indexOf(props[i]) !== -1)
        amount++;
    }
    elm.addEventListener('transitionend', function(ev) {
      if (ev.target === elm)
        --amount;
      if (amount === 0)
        rm();
    });
  }
  module.exports = {
    create: updateStyle,
    update: updateStyle,
    destroy: applyDestroyStyle,
    remove: applyRemoveStyle
  };
  return module.exports;
});

$__System.registerDynamic("4", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    array: Array.isArray,
    primitive: function(s) {
      return typeof s === 'string' || typeof s === 'number';
    }
  };
  return module.exports;
});

$__System.registerDynamic("b", ["4"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var is = $__require('4');
  function arrInvoker(arr) {
    return function() {
      arr.length === 2 ? arr[0](arr[1]) : arr[0].apply(undefined, arr.slice(1));
    };
  }
  function fnInvoker(o) {
    return function(ev) {
      o.fn(ev);
    };
  }
  function updateEventListeners(oldVnode, vnode) {
    var name,
        cur,
        old,
        elm = vnode.elm,
        oldOn = oldVnode.data.on || {},
        on = vnode.data.on;
    if (!on)
      return;
    for (name in on) {
      cur = on[name];
      old = oldOn[name];
      if (old === undefined) {
        if (is.array(cur)) {
          elm.addEventListener(name, arrInvoker(cur));
        } else {
          cur = {fn: cur};
          on[name] = cur;
          elm.addEventListener(name, fnInvoker(cur));
        }
      } else if (is.array(old)) {
        old.length = cur.length;
        for (var i = 0; i < old.length; ++i)
          old[i] = cur[i];
        on[name] = old;
      } else {
        old.fn = cur;
        on[name] = old;
      }
    }
  }
  module.exports = {
    create: updateEventListeners,
    update: updateEventListeners
  };
  return module.exports;
});

$__System.registerDynamic("c", ["6", "7", "8", "9", "a", "b"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var snabbdom = $__require('6');
  var optimized = {};
  var activeController = null;
  var patch = snabbdom.init([$__require('7'), $__require('8'), $__require('9'), $__require('a'), $__require('b'), {destroy: function destroy(vnode) {
      if (vnode.isOptimized && vnode.key) {
        delete optimized[vnode.key];
      }
    }}]);
  var hasChanged = function hasChanged(oldProps, oldState, newProps, newState) {
    if (Object.keys(oldProps).length !== Object.keys(newProps).length || Object.keys(oldState).length !== Object.keys(newState).length) {
      return true;
    }
    var key;
    for (key in oldProps) {
      if (oldProps[key] !== newProps[key]) {
        return true;
      }
    }
    for (key in oldState) {
      if (oldState[key] !== newState[key]) {
        return true;
      }
    }
    return false;
  };
  module.exports.component = function component() {
    var extractsState = arguments.length === 2;
    var statePaths = arguments[0];
    var render = extractsState ? arguments[1] : arguments[0];
    return function bb() {
      var props = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
      var children = arguments[1];
      props.key = props.key || props.module;
      var modPath = props && props.module ? props.module : undefined;
      var newState = activeController ? activeController.get(modPath) : {};
      if (props && props.key && optimized[props.key] && !hasChanged(optimized[props.key].props, optimized[props.key].state, props, newState)) {
        return optimized[props.key].vnode;
      }
      var mod = {
        props: props,
        children: children,
        state: newState,
        signals: activeController ? activeController.getSignals(modPath) : {},
        modules: activeController ? activeController.getModules(modPath) : {}
      };
      var vnode = render(mod);
      if (props.key) {
        optimized[props.key] = {
          vnode: vnode,
          props: props,
          state: newState
        };
        vnode.key = props.key;
        vnode.isOptimized = true;
        vnode.optimize = props.optimize;
      }
      return vnode;
    };
  };
  module.exports.patch = patch;
  module.exports.render = function render(cb, el, controller) {
    activeController = controller;
    var prevNode = cb();
    if (el) {
      if (controller) {
        controller.on('change', function() {
          var newNode = cb();
          patch(prevNode, newNode);
          prevNode = newNode;
        });
      }
      patch(el, prevNode);
    }
    return prevNode;
  };
  return module.exports;
});

$__System.registerDynamic("d", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function() {
    'use strict';
    var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
    var ExecutionEnvironment = {
      canUseDOM: canUseDOM,
      canUseWorkers: typeof Worker !== 'undefined',
      canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),
      canUseViewport: canUseDOM && !!window.screen
    };
    if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
      define(function() {
        return ExecutionEnvironment;
      });
    } else if (typeof module !== 'undefined' && module.exports) {
      module.exports = ExecutionEnvironment;
    } else {
      window.ExecutionEnvironment = ExecutionEnvironment;
    }
  }());
  return module.exports;
});

$__System.registerDynamic("e", ["d"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.default = screenSize;
  var _exenv = $__require('d');
  function screenSize() {
    return {
      width: _exenv.canUseDOM && (window.innerWidth || document.body.clientWidth) || 1024,
      height: _exenv.canUseDOM && (window.innerHeight || document.body.clientHeight) || 768
    };
  }
  return module.exports;
});

$__System.registerDynamic("f", ["e"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.default = screenInfo;
  var _screenSize = $__require('e');
  var _screenSize2 = _interopRequireDefault(_screenSize);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  var types = ['xs', 'sm', 'md', 'lg'];
  function screenInfo() {
    var _getScreenSize = (0, _screenSize2.default)();
    var width = _getScreenSize.width;
    var height = _getScreenSize.height;
    var size = width >= 1200 ? 4 : width >= 992 ? 3 : width >= 768 ? 2 : 1;
    return {
      size: size,
      type: types[size - 1],
      isLandscape: width >= height,
      isPortrait: width < height
    };
  }
  return module.exports;
});

$__System.registerDynamic("10", ["e", "f"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.screenInfo = exports.screenSize = undefined;
  var _screenSize = $__require('e');
  var _screenSize2 = _interopRequireDefault(_screenSize);
  var _screenInfo = $__require('f');
  var _screenInfo2 = _interopRequireDefault(_screenInfo);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  exports.screenSize = _screenSize2.default;
  exports.screenInfo = _screenInfo2.default;
  return module.exports;
});

$__System.registerDynamic("11", ["12"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.default = element;
  var _index = $__require('12');
  var _index2 = _interopRequireDefault(_index);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  function _objectWithoutProperties(obj, keys) {
    var target = {};
    for (var i in obj) {
      if (keys.indexOf(i) >= 0)
        continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i))
        continue;
      target[i] = obj[i];
    }
    return target;
  }
  function element(_ref) {
    var key = _ref.key;
    var hook = _ref.hook;
    var _ref$on = _ref.on;
    var on = _ref$on === undefined ? {} : _ref$on;
    var _ref$style = _ref.style;
    var style = _ref$style === undefined ? {} : _ref$style;
    var attrs = _ref.attrs;
    var props = _objectWithoutProperties(_ref, ['key', 'hook', 'on', 'style', 'attrs']);
    var children = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
    if (props.margin || props.margin === 0)
      style.margin = Array.isArray(props.margin) ? props.margin.map(function(i) {
        return i + 'px';
      }).join(' ') : props.margin + 'px';
    if (props.padding || props.padding === 0)
      style.padding = Array.isArray(props.padding) ? props.padding.map(function(i) {
        return i + 'px';
      }).join(' ') : props.padding + 'px';
    if (props.font) {
      if (typeof props.font[0] === 'number')
        props.font[0] = props.font[0] + 'px';
      if (typeof props.font[1] === 'number')
        props.font[1] = props.font[1] + 'px';
      style.font = props.font.join(' ');
    }
    if (props.outline === 0)
      style.outline = 'none';
    if (props.display)
      style.display = props.display;
    if (props.shadow)
      style.boxShadow = props.shadow.shift() + 'px ' + props.shadow.shift() + 'px ' + props.shadow.shift() + 'px ' + (0, _index.color)(props.shadow);
    if (props.uppercase)
      style.textTransform = 'uppercase';
    if (props.lowercase)
      style.textTransform = 'lowercase';
    if (props.radius)
      style.borderRadius = props.radius + 'px';
    if (props.width)
      style.width = props.width + 'px';
    if (props.height)
      style.height = props.height + 'px';
    if (props.color)
      style.color = (0, _index.color)(props.color);
    if (props.bg)
      style.backgroundColor = (0, _index.color)(props.bg);
    if (props.border)
      style.border = props.border.shift() + 'px ' + props.border.shift() + ' ' + (0, _index.color)(props.border);
    return _index2.default.h(key, {
      on: on,
      hook: hook,
      style: style,
      attrs: attrs,
      props: props,
      class: props.class
    }, children);
  }
  return module.exports;
});

$__System.registerDynamic("13", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.hexToRGBA = hexToRGBA;
  exports.default = color;
  exports.getColor = getColor;
  exports.getRandomColor = getRandomColor;
  var colors = {
    random: function random() {
      var hex = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
      var i = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
      var keys = Object.keys(colors);
      var item = colors.index[Math.floor(Math.random() * colors.index.length)];
      return hex ? colors[item + i] : i ? item + String(i) : item;
    },
    index: ['red', 'pink', 'purple', 'deepPurple', 'indigo', 'blue', 'lightBlue', 'cyan', 'teal', 'green', 'lightGreen', 'lime', 'yellow', 'amber', 'orange', 'deepOrange', 'brown', 'blueGrey', 'grey', 'black', 'slate'],
    slate900: '#181a1f',
    slate800: '#21252b',
    slate500: '#282c34',
    slate50: '#abb2bf',
    red50: '#ffebee',
    red100: '#ffcdd2',
    red200: '#ef9a9a',
    red300: '#e57373',
    red400: '#ef5350',
    red500: '#f44336',
    red600: '#e53935',
    red700: '#d32f2f',
    red800: '#c62828',
    red900: '#b71c1c',
    redA100: '#ff8a80',
    redA200: '#ff5252',
    redA400: '#ff1744',
    redA700: '#d50000',
    pink50: '#fce4ec',
    pink100: '#f8bbd0',
    pink200: '#f48fb1',
    pink300: '#f06292',
    pink400: '#ec407a',
    pink500: '#e91e63',
    pink600: '#d81b60',
    pink700: '#c2185b',
    pink800: '#ad1457',
    pink900: '#880e4f',
    pinkA100: '#ff80ab',
    pinkA200: '#ff4081',
    pinkA400: '#f50057',
    pinkA700: '#c51162',
    purple50: '#f3e5f5',
    purple100: '#e1bee7',
    purple200: '#ce93d8',
    purple300: '#ba68c8',
    purple400: '#ab47bc',
    purple500: '#9c27b0',
    purple600: '#8e24aa',
    purple700: '#7b1fa2',
    purple800: '#6a1b9a',
    purple900: '#4a148c',
    purpleA100: '#ea80fc',
    purpleA200: '#e040fb',
    purpleA400: '#d500f9',
    purpleA700: '#aa00ff',
    deepPurple50: '#ede7f6',
    deepPurple100: '#d1c4e9',
    deepPurple200: '#b39ddb',
    deepPurple300: '#9575cd',
    deepPurple400: '#7e57c2',
    deepPurple500: '#673ab7',
    deepPurple600: '#5e35b1',
    deepPurple700: '#512da8',
    deepPurple800: '#4527a0',
    deepPurple900: '#311b92',
    deepPurpleA100: '#b388ff',
    deepPurpleA200: '#7c4dff',
    deepPurpleA400: '#651fff',
    deepPurpleA700: '#6200ea',
    indigo50: '#e8eaf6',
    indigo100: '#c5cae9',
    indigo200: '#9fa8da',
    indigo300: '#7986cb',
    indigo400: '#5c6bc0',
    indigo500: '#3f51b5',
    indigo600: '#3949ab',
    indigo700: '#303f9f',
    indigo800: '#283593',
    indigo900: '#1a237e',
    indigoA100: '#8c9eff',
    indigoA200: '#536dfe',
    indigoA400: '#3d5afe',
    indigoA700: '#304ffe',
    blue50: '#e3f2fd',
    blue100: '#bbdefb',
    blue200: '#90caf9',
    blue300: '#64b5f6',
    blue400: '#42a5f5',
    blue500: '#2196f3',
    blue600: '#1e88e5',
    blue700: '#1976d2',
    blue800: '#1565c0',
    blue900: '#0d47a1',
    blueA100: '#82b1ff',
    blueA200: '#448aff',
    blueA400: '#2979ff',
    blueA700: '#2962ff',
    lightBlue50: '#e1f5fe',
    lightBlue100: '#b3e5fc',
    lightBlue200: '#81d4fa',
    lightBlue300: '#4fc3f7',
    lightBlue400: '#29b6f6',
    lightBlue500: '#03a9f4',
    lightBlue600: '#039be5',
    lightBlue700: '#0288d1',
    lightBlue800: '#0277bd',
    lightBlue900: '#01579b',
    lightBlueA100: '#80d8ff',
    lightBlueA200: '#40c4ff',
    lightBlueA400: '#00b0ff',
    lightBlueA700: '#0091ea',
    cyan50: '#e0f7fa',
    cyan100: '#b2ebf2',
    cyan200: '#80deea',
    cyan300: '#4dd0e1',
    cyan400: '#26c6da',
    cyan500: '#00bcd4',
    cyan600: '#00acc1',
    cyan700: '#0097a7',
    cyan800: '#00838f',
    cyan900: '#006064',
    cyanA100: '#84ffff',
    cyanA200: '#18ffff',
    cyanA400: '#00e5ff',
    cyanA700: '#00b8d4',
    teal50: '#e0f2f1',
    teal100: '#b2dfdb',
    teal200: '#80cbc4',
    teal300: '#4db6ac',
    teal400: '#26a69a',
    teal500: '#009688',
    teal600: '#00897b',
    teal700: '#00796b',
    teal800: '#00695c',
    teal900: '#004d40',
    tealA100: '#a7ffeb',
    tealA200: '#64ffda',
    tealA400: '#1de9b6',
    tealA700: '#00bfa5',
    green50: '#e8f5e9',
    green100: '#c8e6c9',
    green200: '#a5d6a7',
    green300: '#81c784',
    green400: '#66bb6a',
    green500: '#4caf50',
    green600: '#43a047',
    green700: '#388e3c',
    green800: '#2e7d32',
    green900: '#1b5e20',
    greenA100: '#b9f6ca',
    greenA200: '#69f0ae',
    greenA400: '#00e676',
    greenA700: '#00c853',
    lightGreen50: '#f1f8e9',
    lightGreen100: '#dcedc8',
    lightGreen200: '#c5e1a5',
    lightGreen300: '#aed581',
    lightGreen400: '#9ccc65',
    lightGreen500: '#8bc34a',
    lightGreen600: '#7cb342',
    lightGreen700: '#689f38',
    lightGreen800: '#558b2f',
    lightGreen900: '#33691e',
    lightGreenA100: '#ccff90',
    lightGreenA200: '#b2ff59',
    lightGreenA400: '#76ff03',
    lightGreenA700: '#64dd17',
    lime50: '#f9fbe7',
    lime100: '#f0f4c3',
    lime200: '#e6ee9c',
    lime300: '#dce775',
    lime400: '#d4e157',
    lime500: '#cddc39',
    lime600: '#c0ca33',
    lime700: '#afb42b',
    lime800: '#9e9d24',
    lime900: '#827717',
    limeA100: '#f4ff81',
    limeA200: '#eeff41',
    limeA400: '#c6ff00',
    limeA700: '#aeea00',
    yellow50: '#fffde7',
    yellow100: '#fff9c4',
    yellow200: '#fff59d',
    yellow300: '#fff176',
    yellow400: '#ffee58',
    yellow500: '#ffeb3b',
    yellow600: '#fdd835',
    yellow700: '#fbc02d',
    yellow800: '#f9a825',
    yellow900: '#f57f17',
    yellowA100: '#ffff8d',
    yellowA200: '#ffff00',
    yellowA400: '#ffea00',
    yellowA700: '#ffd600',
    amber50: '#fff8e1',
    amber100: '#ffecb3',
    amber200: '#ffe082',
    amber300: '#ffd54f',
    amber400: '#ffca28',
    amber500: '#ffc107',
    amber600: '#ffb300',
    amber700: '#ffa000',
    amber800: '#ff8f00',
    amber900: '#ff6f00',
    amberA100: '#ffe57f',
    amberA200: '#ffd740',
    amberA400: '#ffc400',
    amberA700: '#ffab00',
    orange50: '#fff3e0',
    orange100: '#ffe0b2',
    orange200: '#ffcc80',
    orange300: '#ffb74d',
    orange400: '#ffa726',
    orange500: '#ff9800',
    orange600: '#fb8c00',
    orange700: '#f57c00',
    orange800: '#ef6c00',
    orange900: '#e65100',
    orangeA100: '#ffd180',
    orangeA200: '#ffab40',
    orangeA400: '#ff9100',
    orangeA700: '#ff6d00',
    deepOrange50: '#fbe9e7',
    deepOrange100: '#ffccbc',
    deepOrange200: '#ffab91',
    deepOrange300: '#ff8a65',
    deepOrange400: '#ff7043',
    deepOrange500: '#ff5722',
    deepOrange600: '#f4511e',
    deepOrange700: '#e64a19',
    deepOrange800: '#d84315',
    deepOrange900: '#bf360c',
    deepOrangeA100: '#ff9e80',
    deepOrangeA200: '#ff6e40',
    deepOrangeA400: '#ff3d00',
    deepOrangeA700: '#dd2c00',
    brown50: '#efebe9',
    brown100: '#d7ccc8',
    brown200: '#bcaaa4',
    brown300: '#a1887f',
    brown400: '#8d6e63',
    brown500: '#795548',
    brown600: '#6d4c41',
    brown700: '#5d4037',
    brown800: '#4e342e',
    brown900: '#3e2723',
    blueGrey50: '#eceff1',
    blueGrey100: '#cfd8dc',
    blueGrey200: '#b0bec5',
    blueGrey300: '#90a4ae',
    blueGrey400: '#78909c',
    blueGrey500: '#607d8b',
    blueGrey600: '#546e7a',
    blueGrey700: '#455a64',
    blueGrey800: '#37474f',
    blueGrey900: '#263238',
    grey50: '#fafafa',
    grey100: '#f5f5f5',
    grey200: '#eeeeee',
    grey300: '#e0e0e0',
    grey400: '#bdbdbd',
    grey500: '#9e9e9e',
    grey600: '#757575',
    grey700: '#616161',
    grey800: '#424242',
    grey900: '#212121',
    black: '#000000',
    white: '#ffffff',
    transparent: 'rgba(0, 0, 0, 0)',
    fullBlack: 'rgba(0, 0, 0, 1)',
    darkBlack: 'rgba(0, 0, 0, 0.87)',
    lightBlack: 'rgba(0, 0, 0, 0.54)',
    minBlack: 'rgba(0, 0, 0, 0.26)',
    faintBlack: 'rgba(0, 0, 0, 0.12)',
    fullWhite: 'rgba(255, 255, 255, 1)',
    darkWhite: 'rgba(255, 255, 255, 0.87)',
    lightWhite: 'rgba(255, 255, 255, 0.54)'
  };
  function hexToRGBA(color) {
    var alpha = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];
    if (color.length === 4) {
      var extendedColor = '#';
      for (var i = 1; i < color.length; i++) {
        extendedColor += color.charAt(i) + color.charAt(i);
      }
      color = extendedColor;
    }
    var values = {
      r: parseInt(color.substr(1, 2), 16),
      g: parseInt(color.substr(3, 2), 16),
      b: parseInt(color.substr(5, 2), 16)
    };
    return 'rgba(' + values.r + ',' + values.g + ',' + values.b + ',' + alpha + ')';
  }
  function color(name) {
    var index = arguments.length <= 1 || arguments[1] === undefined ? 500 : arguments[1];
    var alpha = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];
    if (index <= 1) {
      alpha = index;
      index = 500;
    }
    return name ? getColor(name, index, alpha) : getRandomColor(index, alpha);
  }
  function getColor(name) {
    var index = arguments.length <= 1 || arguments[1] === undefined ? 500 : arguments[1];
    var alpha = arguments[2];
    if (name === 'black' || name === 'white')
      index = '';
    return colors[name + index] ? hexToRGBA(colors[name + index], alpha) : 'inherit';
  }
  function getRandomColor() {
    var index = arguments.length <= 0 || arguments[0] === undefined ? 500 : arguments[0];
    var alpha = arguments[1];
    var item = colors.index[Math.floor(Math.random() * colors.index.length)];
    return getColor(item, index, alpha);
  }
  return module.exports;
});

$__System.registerDynamic("14", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(root, factory) {
    if (typeof define === 'function' && define.amd) {
      define(factory);
    } else if (typeof exports === 'object') {
      module.exports = factory();
    } else {
      root.deepmerge = factory();
    }
  }(this, function() {
    return function deepmerge(target, src) {
      var array = Array.isArray(src);
      var dst = array && [] || {};
      if (array) {
        target = target || [];
        dst = dst.concat(target);
        src.forEach(function(e, i) {
          if (typeof dst[i] === 'undefined') {
            dst[i] = e;
          } else if (typeof e === 'object') {
            dst[i] = deepmerge(target[i], e);
          } else {
            if (target.indexOf(e) === -1) {
              dst.push(e);
            }
          }
        });
      } else {
        if (target && typeof target === 'object') {
          Object.keys(target).forEach(function(key) {
            dst[key] = target[key];
          });
        }
        Object.keys(src).forEach(function(key) {
          if (typeof src[key] !== 'object' || !src[key]) {
            dst[key] = src[key];
          } else {
            if (!target[key]) {
              dst[key] = src[key];
            } else {
              dst[key] = deepmerge(target[key], src[key]);
            }
          }
        });
      }
      return dst;
    };
  }));
  return module.exports;
});

$__System.registerDynamic("15", ["14"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.default = style;
  var _deepmerge = $__require('14');
  var _deepmerge2 = _interopRequireDefault(_deepmerge);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  var vars = {};
  style.init = function(variables) {
    vars = (0, _deepmerge2.default)(vars, variables);
  };
  function style(fn, overrides) {
    return overrides ? (0, _deepmerge2.default)(fn(vars), overrides) : fn(vars);
  }
  return module.exports;
});

$__System.registerDynamic("16", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    area: true,
    base: true,
    br: true,
    col: true,
    embed: true,
    hr: true,
    img: true,
    input: true,
    keygen: true,
    link: true,
    meta: true,
    param: true,
    source: true,
    track: true,
    wbr: true
  };
  return module.exports;
});

$__System.registerDynamic("17", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    'a': true,
    'defs': true,
    'glyph': true,
    'g': true,
    'marker': true,
    'mask': true,
    'missing-glyph': true,
    'pattern': true,
    'svg': true,
    'switch': true,
    'symbol': true,
    'desc': true,
    'metadata': true,
    'title': true
  };
  return module.exports;
});

$__System.registerDynamic("18", ["19", "16", "17"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var parseSelector = $__require('19');
  var VOID_ELEMENTS = $__require('16');
  var CONTAINER_ELEMENTS = $__require('17');
  module.exports = function init(modules) {
    function parse(data) {
      return modules.reduce(function(arr, fn) {
        arr.push(fn(data));
        return arr;
      }, []).filter(function(result) {
        return result !== '';
      });
    }
    return function renderToString(vnode) {
      if (!vnode.sel && vnode.text) {
        return vnode.text;
      }
      vnode.data = vnode.data || {};
      if (typeof vnode.sel === 'string' && vnode.sel.slice(0, 5) === 'thunk') {
        vnode = vnode.data.fn.apply(null, vnode.data.args);
      }
      var tagName = parseSelector(vnode.sel).tagName;
      var attributes = parse(vnode);
      var svg = vnode.data.ns === 'http://www.w3.org/2000/svg';
      var tag = [];
      tag.push('<' + tagName);
      if (attributes.length) {
        tag.push(' ' + attributes.join(' '));
      }
      if (svg && CONTAINER_ELEMENTS[tagName] !== true) {
        tag.push(' /');
      }
      tag.push('>');
      if (VOID_ELEMENTS[tagName] !== true && !svg || svg && CONTAINER_ELEMENTS[tagName] === true) {
        if (vnode.data.props && vnode.data.props.innerHTML) {
          tag.push(vnode.data.props.innerHTML);
        } else if (vnode.text) {
          tag.push(vnode.text);
        } else if (vnode.children) {
          vnode.children.forEach(function(child) {
            tag.push(renderToString(child));
          });
        }
        tag.push('</' + tagName + '>');
      }
      return tag.join('');
    };
  };
  return module.exports;
});

$__System.registerDynamic("1a", ["1b", "1c"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var isArguments = $__require('1b'),
      isArray = $__require('1c');
  function isObjectLike(value) {
    return !!value && typeof value == 'object';
  }
  var MAX_SAFE_INTEGER = 9007199254740991;
  function arrayPush(array, values) {
    var index = -1,
        length = values.length,
        offset = array.length;
    while (++index < length) {
      array[offset + index] = values[index];
    }
    return array;
  }
  function baseFlatten(array, isDeep, isStrict, result) {
    result || (result = []);
    var index = -1,
        length = array.length;
    while (++index < length) {
      var value = array[index];
      if (isObjectLike(value) && isArrayLike(value) && (isStrict || isArray(value) || isArguments(value))) {
        if (isDeep) {
          baseFlatten(value, isDeep, isStrict, result);
        } else {
          arrayPush(result, value);
        }
      } else if (!isStrict) {
        result[result.length] = value;
      }
    }
    return result;
  }
  function baseProperty(key) {
    return function(object) {
      return object == null ? undefined : object[key];
    };
  }
  var getLength = baseProperty('length');
  function isArrayLike(value) {
    return value != null && isLength(getLength(value));
  }
  function isLength(value) {
    return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }
  module.exports = baseFlatten;
  return module.exports;
});

$__System.registerDynamic("1d", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  function baseIndexOf(array, value, fromIndex) {
    if (value !== value) {
      return indexOfNaN(array, fromIndex);
    }
    var index = fromIndex - 1,
        length = array.length;
    while (++index < length) {
      if (array[index] === value) {
        return index;
      }
    }
    return -1;
  }
  function indexOfNaN(array, fromIndex, fromRight) {
    var length = array.length,
        index = fromIndex + (fromRight ? 0 : -1);
    while ((fromRight ? index-- : ++index < length)) {
      var other = array[index];
      if (other !== other) {
        return index;
      }
    }
    return -1;
  }
  module.exports = baseIndexOf;
  return module.exports;
});

$__System.registerDynamic("1e", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  function cacheIndexOf(cache, value) {
    var data = cache.data,
        result = (typeof value == 'string' || isObject(value)) ? data.set.has(value) : data.hash[value];
    return result ? 0 : -1;
  }
  function isObject(value) {
    var type = typeof value;
    return !!value && (type == 'object' || type == 'function');
  }
  module.exports = cacheIndexOf;
  return module.exports;
});

$__System.registerDynamic("1f", ["20"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var getNative = $__require('20');
  var Set = getNative(global, 'Set');
  var nativeCreate = getNative(Object, 'create');
  function SetCache(values) {
    var length = values ? values.length : 0;
    this.data = {
      'hash': nativeCreate(null),
      'set': new Set
    };
    while (length--) {
      this.push(values[length]);
    }
  }
  function cachePush(value) {
    var data = this.data;
    if (typeof value == 'string' || isObject(value)) {
      data.set.add(value);
    } else {
      data.hash[value] = true;
    }
  }
  function createCache(values) {
    return (nativeCreate && Set) ? new SetCache(values) : null;
  }
  function isObject(value) {
    var type = typeof value;
    return !!value && (type == 'object' || type == 'function');
  }
  SetCache.prototype.push = cachePush;
  module.exports = createCache;
  return module.exports;
});

$__System.registerDynamic("21", ["1d", "1e", "1f"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var baseIndexOf = $__require('1d'),
      cacheIndexOf = $__require('1e'),
      createCache = $__require('1f');
  var LARGE_ARRAY_SIZE = 200;
  function baseUniq(array, iteratee) {
    var index = -1,
        indexOf = baseIndexOf,
        length = array.length,
        isCommon = true,
        isLarge = isCommon && length >= LARGE_ARRAY_SIZE,
        seen = isLarge ? createCache() : null,
        result = [];
    if (seen) {
      indexOf = cacheIndexOf;
      isCommon = false;
    } else {
      isLarge = false;
      seen = iteratee ? [] : result;
    }
    outer: while (++index < length) {
      var value = array[index],
          computed = iteratee ? iteratee(value, index, array) : value;
      if (isCommon && value === value) {
        var seenIndex = seen.length;
        while (seenIndex--) {
          if (seen[seenIndex] === computed) {
            continue outer;
          }
        }
        if (iteratee) {
          seen.push(computed);
        }
        result.push(value);
      } else if (indexOf(seen, computed, 0) < 0) {
        if (iteratee || isLarge) {
          seen.push(computed);
        }
        result.push(value);
      }
    }
    return result;
  }
  module.exports = baseUniq;
  return module.exports;
});

$__System.registerDynamic("22", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var FUNC_ERROR_TEXT = 'Expected a function';
  var nativeMax = Math.max;
  function restParam(func, start) {
    if (typeof func != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    start = nativeMax(start === undefined ? (func.length - 1) : (+start || 0), 0);
    return function() {
      var args = arguments,
          index = -1,
          length = nativeMax(args.length - start, 0),
          rest = Array(length);
      while (++index < length) {
        rest[index] = args[start + index];
      }
      switch (start) {
        case 0:
          return func.call(this, rest);
        case 1:
          return func.call(this, args[0], rest);
        case 2:
          return func.call(this, args[0], args[1], rest);
      }
      var otherArgs = Array(start + 1);
      index = -1;
      while (++index < start) {
        otherArgs[index] = args[index];
      }
      otherArgs[start] = rest;
      return func.apply(this, otherArgs);
    };
  }
  module.exports = restParam;
  return module.exports;
});

$__System.registerDynamic("23", ["1a", "21", "22"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var baseFlatten = $__require('1a'),
      baseUniq = $__require('21'),
      restParam = $__require('22');
  var union = restParam(function(arrays) {
    return baseUniq(baseFlatten(arrays, false, true));
  });
  module.exports = union;
  return module.exports;
});

$__System.registerDynamic("24", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = (function split(undef) {
    var nativeSplit = String.prototype.split,
        compliantExecNpcg = /()??/.exec("")[1] === undef,
        self;
    self = function(str, separator, limit) {
      if (Object.prototype.toString.call(separator) !== "[object RegExp]") {
        return nativeSplit.call(str, separator, limit);
      }
      var output = [],
          flags = (separator.ignoreCase ? "i" : "") + (separator.multiline ? "m" : "") + (separator.extended ? "x" : "") + (separator.sticky ? "y" : ""),
          lastLastIndex = 0,
          separator = new RegExp(separator.source, flags + "g"),
          separator2,
          match,
          lastIndex,
          lastLength;
      str += "";
      if (!compliantExecNpcg) {
        separator2 = new RegExp("^" + separator.source + "$(?!\\s)", flags);
      }
      limit = limit === undef ? -1 >>> 0 : limit >>> 0;
      while (match = separator.exec(str)) {
        lastIndex = match.index + match[0].length;
        if (lastIndex > lastLastIndex) {
          output.push(str.slice(lastLastIndex, match.index));
          if (!compliantExecNpcg && match.length > 1) {
            match[0].replace(separator2, function() {
              for (var i = 1; i < arguments.length - 2; i++) {
                if (arguments[i] === undef) {
                  match[i] = undef;
                }
              }
            });
          }
          if (match.length > 1 && match.index < str.length) {
            Array.prototype.push.apply(output, match.slice(1));
          }
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= limit) {
            break;
          }
        }
        if (separator.lastIndex === match.index) {
          separator.lastIndex++;
        }
      }
      if (lastLastIndex === str.length) {
        if (lastLength || !separator.test("")) {
          output.push("");
        }
      } else {
        output.push(str.slice(lastLastIndex));
      }
      return output.length > limit ? output.slice(0, limit) : output;
    };
    return self;
  })();
  return module.exports;
});

$__System.registerDynamic("19", ["24"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var split = $__require('24');
  var classIdSplit = /([\.#]?[a-zA-Z0-9\u007F-\uFFFF_:-]+)/;
  var notClassId = /^\.|#/;
  module.exports = function parseSelector(selector, upper) {
    selector = selector || '';
    var tagName;
    var id = '';
    var classes = [];
    var tagParts = split(selector, classIdSplit);
    if (notClassId.test(tagParts[1]) || selector === '') {
      tagName = 'div';
    }
    var part,
        type,
        i;
    for (i = 0; i < tagParts.length; i++) {
      part = tagParts[i];
      if (!part) {
        continue;
      }
      type = part.charAt(0);
      if (!tagName) {
        tagName = part;
      } else if (type === '.') {
        classes.push(part.substring(1, part.length));
      } else if (type === '#') {
        id = part.substring(1, part.length);
      }
    }
    return {
      tagName: upper === true ? tagName.toUpperCase() : tagName,
      id: id,
      className: classes.join(' ')
    };
  };
  return module.exports;
});

$__System.registerDynamic("25", ["26", "27", "23", "19"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var forOwn = $__require('26');
  var escape = $__require('27');
  var union = $__require('23');
  var parseSelector = $__require('19');
  module.exports = function attributes(vnode) {
    var selector = parseSelector(vnode.sel);
    var parsedClasses = selector.className.split(' ');
    var attributes = [];
    var classes = [];
    var values = {};
    if (selector.id) {
      values.id = selector.id;
    }
    setAttributes(vnode.data.props, values);
    setAttributes(vnode.data.attrs, values);
    if (vnode.data.class) {
      values.class = undefined;
    }
    forOwn(vnode.data.class, function(value, key) {
      if (value === true) {
        classes.push(key);
      }
    });
    classes = union(classes, values.class, parsedClasses).filter(function(x) {
      return x !== '';
    });
    if (classes.length) {
      values.class = classes.join(' ');
    }
    forOwn(values, function(value, key) {
      attributes.push(value === true ? key : key + '="' + escape(value) + '"');
    });
    return attributes.length ? attributes.join(' ') : '';
  };
  function setAttributes(values, target) {
    forOwn(values, function(value, key) {
      if (key === 'htmlFor') {
        target['for'] = value;
        return;
      }
      if (key === 'className') {
        target['class'] = value.split(' ');
        return;
      }
      if (key === 'innerHTML') {
        return;
      }
      target[key] = value;
    });
  }
  return module.exports;
});

$__System.registerDynamic("28", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var baseFor = createBaseFor();
  function createBaseFor(fromRight) {
    return function(object, iteratee, keysFunc) {
      var index = -1,
          iterable = Object(object),
          props = keysFunc(object),
          length = props.length;
      while (length--) {
        var key = props[fromRight ? length : ++index];
        if (iteratee(iterable[key], key, iterable) === false) {
          break;
        }
      }
      return object;
    };
  }
  module.exports = baseFor;
  return module.exports;
});

$__System.registerDynamic("29", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  function bindCallback(func, thisArg, argCount) {
    if (typeof func != 'function') {
      return identity;
    }
    if (thisArg === undefined) {
      return func;
    }
    switch (argCount) {
      case 1:
        return function(value) {
          return func.call(thisArg, value);
        };
      case 3:
        return function(value, index, collection) {
          return func.call(thisArg, value, index, collection);
        };
      case 4:
        return function(accumulator, value, index, collection) {
          return func.call(thisArg, accumulator, value, index, collection);
        };
      case 5:
        return function(value, other, key, object, source) {
          return func.call(thisArg, value, other, key, object, source);
        };
    }
    return function() {
      return func.apply(thisArg, arguments);
    };
  }
  function identity(value) {
    return value;
  }
  module.exports = bindCallback;
  return module.exports;
});

$__System.registerDynamic("20", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var funcTag = '[object Function]';
  var reIsHostCtor = /^\[object .+?Constructor\]$/;
  function isObjectLike(value) {
    return !!value && typeof value == 'object';
  }
  var objectProto = Object.prototype;
  var fnToString = Function.prototype.toString;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var objToString = objectProto.toString;
  var reIsNative = RegExp('^' + fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
  function getNative(object, key) {
    var value = object == null ? undefined : object[key];
    return isNative(value) ? value : undefined;
  }
  function isFunction(value) {
    return isObject(value) && objToString.call(value) == funcTag;
  }
  function isObject(value) {
    var type = typeof value;
    return !!value && (type == 'object' || type == 'function');
  }
  function isNative(value) {
    if (value == null) {
      return false;
    }
    if (isFunction(value)) {
      return reIsNative.test(fnToString.call(value));
    }
    return isObjectLike(value) && reIsHostCtor.test(value);
  }
  module.exports = getNative;
  return module.exports;
});

$__System.registerDynamic("1b", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var MAX_SAFE_INTEGER = 9007199254740991;
  var argsTag = '[object Arguments]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]';
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var objectToString = objectProto.toString;
  var propertyIsEnumerable = objectProto.propertyIsEnumerable;
  function baseProperty(key) {
    return function(object) {
      return object == null ? undefined : object[key];
    };
  }
  var getLength = baseProperty('length');
  function isArguments(value) {
    return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') && (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
  }
  function isArrayLike(value) {
    return value != null && isLength(getLength(value)) && !isFunction(value);
  }
  function isArrayLikeObject(value) {
    return isObjectLike(value) && isArrayLike(value);
  }
  function isFunction(value) {
    var tag = isObject(value) ? objectToString.call(value) : '';
    return tag == funcTag || tag == genTag;
  }
  function isLength(value) {
    return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }
  function isObject(value) {
    var type = typeof value;
    return !!value && (type == 'object' || type == 'function');
  }
  function isObjectLike(value) {
    return !!value && typeof value == 'object';
  }
  module.exports = isArguments;
  return module.exports;
});

$__System.registerDynamic("1c", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var arrayTag = '[object Array]',
      funcTag = '[object Function]';
  var reIsHostCtor = /^\[object .+?Constructor\]$/;
  function isObjectLike(value) {
    return !!value && typeof value == 'object';
  }
  var objectProto = Object.prototype;
  var fnToString = Function.prototype.toString;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var objToString = objectProto.toString;
  var reIsNative = RegExp('^' + fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
  var nativeIsArray = getNative(Array, 'isArray');
  var MAX_SAFE_INTEGER = 9007199254740991;
  function getNative(object, key) {
    var value = object == null ? undefined : object[key];
    return isNative(value) ? value : undefined;
  }
  function isLength(value) {
    return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }
  var isArray = nativeIsArray || function(value) {
    return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
  };
  function isFunction(value) {
    return isObject(value) && objToString.call(value) == funcTag;
  }
  function isObject(value) {
    var type = typeof value;
    return !!value && (type == 'object' || type == 'function');
  }
  function isNative(value) {
    if (value == null) {
      return false;
    }
    if (isFunction(value)) {
      return reIsNative.test(fnToString.call(value));
    }
    return isObjectLike(value) && reIsHostCtor.test(value);
  }
  module.exports = isArray;
  return module.exports;
});

$__System.registerDynamic("2a", ["20", "1b", "1c"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var getNative = $__require('20'),
      isArguments = $__require('1b'),
      isArray = $__require('1c');
  var reIsUint = /^\d+$/;
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var nativeKeys = getNative(Object, 'keys');
  var MAX_SAFE_INTEGER = 9007199254740991;
  function baseProperty(key) {
    return function(object) {
      return object == null ? undefined : object[key];
    };
  }
  var getLength = baseProperty('length');
  function isArrayLike(value) {
    return value != null && isLength(getLength(value));
  }
  function isIndex(value, length) {
    value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
    length = length == null ? MAX_SAFE_INTEGER : length;
    return value > -1 && value % 1 == 0 && value < length;
  }
  function isLength(value) {
    return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }
  function shimKeys(object) {
    var props = keysIn(object),
        propsLength = props.length,
        length = propsLength && object.length;
    var allowIndexes = !!length && isLength(length) && (isArray(object) || isArguments(object));
    var index = -1,
        result = [];
    while (++index < propsLength) {
      var key = props[index];
      if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
        result.push(key);
      }
    }
    return result;
  }
  function isObject(value) {
    var type = typeof value;
    return !!value && (type == 'object' || type == 'function');
  }
  var keys = !nativeKeys ? shimKeys : function(object) {
    var Ctor = object == null ? undefined : object.constructor;
    if ((typeof Ctor == 'function' && Ctor.prototype === object) || (typeof object != 'function' && isArrayLike(object))) {
      return shimKeys(object);
    }
    return isObject(object) ? nativeKeys(object) : [];
  };
  function keysIn(object) {
    if (object == null) {
      return [];
    }
    if (!isObject(object)) {
      object = Object(object);
    }
    var length = object.length;
    length = (length && isLength(length) && (isArray(object) || isArguments(object)) && length) || 0;
    var Ctor = object.constructor,
        index = -1,
        isProto = typeof Ctor == 'function' && Ctor.prototype === object,
        result = Array(length),
        skipIndexes = length > 0;
    while (++index < length) {
      result[index] = (index + '');
    }
    for (var key in object) {
      if (!(skipIndexes && isIndex(key, length)) && !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
        result.push(key);
      }
    }
    return result;
  }
  module.exports = keys;
  return module.exports;
});

$__System.registerDynamic("26", ["28", "29", "2a"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var baseFor = $__require('28'),
      bindCallback = $__require('29'),
      keys = $__require('2a');
  function baseForOwn(object, iteratee) {
    return baseFor(object, iteratee, keys);
  }
  function createForOwn(objectFunc) {
    return function(object, iteratee, thisArg) {
      if (typeof iteratee != 'function' || thisArg !== undefined) {
        iteratee = bindCallback(iteratee, thisArg, 3);
      }
      return objectFunc(object, iteratee);
    };
  }
  var forOwn = createForOwn(baseForOwn);
  module.exports = forOwn;
  return module.exports;
});

$__System.registerDynamic("27", ["2b"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var root = $__require('2b');
  var INFINITY = 1 / 0;
  var symbolTag = '[object Symbol]';
  var reUnescapedHtml = /[&<>"'`]/g,
      reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
  var htmlEscapes = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '`': '&#96;'
  };
  function escapeHtmlChar(chr) {
    return htmlEscapes[chr];
  }
  var objectProto = Object.prototype;
  var objectToString = objectProto.toString;
  var Symbol = root.Symbol;
  var symbolProto = Symbol ? Symbol.prototype : undefined,
      symbolToString = Symbol ? symbolProto.toString : undefined;
  function isObjectLike(value) {
    return !!value && typeof value == 'object';
  }
  function isSymbol(value) {
    return typeof value == 'symbol' || (isObjectLike(value) && objectToString.call(value) == symbolTag);
  }
  function toString(value) {
    if (typeof value == 'string') {
      return value;
    }
    if (value == null) {
      return '';
    }
    if (isSymbol(value)) {
      return Symbol ? symbolToString.call(value) : '';
    }
    var result = (value + '');
    return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
  }
  function escape(string) {
    string = toString(string);
    return (string && reHasUnescapedHtml.test(string)) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
  }
  module.exports = escape;
  return module.exports;
});

$__System.registerDynamic("2c", ["2b"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var root = $__require('2b');
  var INFINITY = 1 / 0;
  var symbolTag = '[object Symbol]';
  var reLatin1 = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g;
  var rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23',
      rsComboSymbolsRange = '\\u20d0-\\u20f0';
  var rsCombo = '[' + rsComboMarksRange + rsComboSymbolsRange + ']';
  var reComboMark = RegExp(rsCombo, 'g');
  var deburredLetters = {
    '\xc0': 'A',
    '\xc1': 'A',
    '\xc2': 'A',
    '\xc3': 'A',
    '\xc4': 'A',
    '\xc5': 'A',
    '\xe0': 'a',
    '\xe1': 'a',
    '\xe2': 'a',
    '\xe3': 'a',
    '\xe4': 'a',
    '\xe5': 'a',
    '\xc7': 'C',
    '\xe7': 'c',
    '\xd0': 'D',
    '\xf0': 'd',
    '\xc8': 'E',
    '\xc9': 'E',
    '\xca': 'E',
    '\xcb': 'E',
    '\xe8': 'e',
    '\xe9': 'e',
    '\xea': 'e',
    '\xeb': 'e',
    '\xcC': 'I',
    '\xcd': 'I',
    '\xce': 'I',
    '\xcf': 'I',
    '\xeC': 'i',
    '\xed': 'i',
    '\xee': 'i',
    '\xef': 'i',
    '\xd1': 'N',
    '\xf1': 'n',
    '\xd2': 'O',
    '\xd3': 'O',
    '\xd4': 'O',
    '\xd5': 'O',
    '\xd6': 'O',
    '\xd8': 'O',
    '\xf2': 'o',
    '\xf3': 'o',
    '\xf4': 'o',
    '\xf5': 'o',
    '\xf6': 'o',
    '\xf8': 'o',
    '\xd9': 'U',
    '\xda': 'U',
    '\xdb': 'U',
    '\xdc': 'U',
    '\xf9': 'u',
    '\xfa': 'u',
    '\xfb': 'u',
    '\xfc': 'u',
    '\xdd': 'Y',
    '\xfd': 'y',
    '\xff': 'y',
    '\xc6': 'Ae',
    '\xe6': 'ae',
    '\xde': 'Th',
    '\xfe': 'th',
    '\xdf': 'ss'
  };
  function deburrLetter(letter) {
    return deburredLetters[letter];
  }
  var objectProto = Object.prototype;
  var objectToString = objectProto.toString;
  var Symbol = root.Symbol;
  var symbolProto = Symbol ? Symbol.prototype : undefined,
      symbolToString = Symbol ? symbolProto.toString : undefined;
  function isObjectLike(value) {
    return !!value && typeof value == 'object';
  }
  function isSymbol(value) {
    return typeof value == 'symbol' || (isObjectLike(value) && objectToString.call(value) == symbolTag);
  }
  function toString(value) {
    if (typeof value == 'string') {
      return value;
    }
    if (value == null) {
      return '';
    }
    if (isSymbol(value)) {
      return Symbol ? symbolToString.call(value) : '';
    }
    var result = (value + '');
    return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
  }
  function deburr(string) {
    string = toString(string);
    return string && string.replace(reLatin1, deburrLetter).replace(reComboMark, '');
  }
  module.exports = deburr;
  return module.exports;
});

$__System.registerDynamic("2b", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var objectTypes = {
    'function': true,
    'object': true
  };
  var freeExports = (objectTypes[typeof exports] && exports && !exports.nodeType) ? exports : undefined;
  var freeModule = (objectTypes[typeof module] && module && !module.nodeType) ? module : undefined;
  var freeGlobal = checkGlobal(freeExports && freeModule && typeof global == 'object' && global);
  var freeSelf = checkGlobal(objectTypes[typeof self] && self);
  var freeWindow = checkGlobal(objectTypes[typeof window] && window);
  var thisGlobal = checkGlobal(objectTypes[typeof this] && this);
  var root = freeGlobal || ((freeWindow !== (thisGlobal && thisGlobal.window)) && freeWindow) || freeSelf || thisGlobal || Function('return this')();
  function checkGlobal(value) {
    return (value && value.Object === Object) ? value : null;
  }
  module.exports = root;
  return module.exports;
});

$__System.registerDynamic("2d", ["2b"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var root = $__require('2b');
  var INFINITY = 1 / 0;
  var symbolTag = '[object Symbol]';
  var rsAstralRange = '\\ud800-\\udfff',
      rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23',
      rsComboSymbolsRange = '\\u20d0-\\u20f0',
      rsDingbatRange = '\\u2700-\\u27bf',
      rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
      rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
      rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
      rsQuoteRange = '\\u2018\\u2019\\u201c\\u201d',
      rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
      rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
      rsVarRange = '\\ufe0e\\ufe0f',
      rsBreakRange = rsMathOpRange + rsNonCharRange + rsQuoteRange + rsSpaceRange;
  var rsBreak = '[' + rsBreakRange + ']',
      rsCombo = '[' + rsComboMarksRange + rsComboSymbolsRange + ']',
      rsDigits = '\\d+',
      rsDingbat = '[' + rsDingbatRange + ']',
      rsLower = '[' + rsLowerRange + ']',
      rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
      rsFitz = '\\ud83c[\\udffb-\\udfff]',
      rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
      rsNonAstral = '[^' + rsAstralRange + ']',
      rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
      rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
      rsUpper = '[' + rsUpperRange + ']',
      rsZWJ = '\\u200d';
  var rsLowerMisc = '(?:' + rsLower + '|' + rsMisc + ')',
      rsUpperMisc = '(?:' + rsUpper + '|' + rsMisc + ')',
      reOptMod = rsModifier + '?',
      rsOptVar = '[' + rsVarRange + ']?',
      rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
      rsSeq = rsOptVar + reOptMod + rsOptJoin,
      rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq;
  var reBasicWord = /[a-zA-Z0-9]+/g;
  var reComplexWord = RegExp([rsUpper + '?' + rsLower + '+(?=' + [rsBreak, rsUpper, '$'].join('|') + ')', rsUpperMisc + '+(?=' + [rsBreak, rsUpper + rsLowerMisc, '$'].join('|') + ')', rsUpper + '?' + rsLowerMisc + '+', rsUpper + '+', rsDigits, rsEmoji].join('|'), 'g');
  var reHasComplexWord = /[a-z][A-Z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
  var objectProto = Object.prototype;
  var objectToString = objectProto.toString;
  var Symbol = root.Symbol;
  var symbolProto = Symbol ? Symbol.prototype : undefined,
      symbolToString = Symbol ? symbolProto.toString : undefined;
  function isObjectLike(value) {
    return !!value && typeof value == 'object';
  }
  function isSymbol(value) {
    return typeof value == 'symbol' || (isObjectLike(value) && objectToString.call(value) == symbolTag);
  }
  function toString(value) {
    if (typeof value == 'string') {
      return value;
    }
    if (value == null) {
      return '';
    }
    if (isSymbol(value)) {
      return Symbol ? symbolToString.call(value) : '';
    }
    var result = (value + '');
    return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
  }
  function words(string, pattern, guard) {
    string = toString(string);
    pattern = guard ? undefined : pattern;
    if (pattern === undefined) {
      pattern = reHasComplexWord.test(string) ? reComplexWord : reBasicWord;
    }
    return string.match(pattern) || [];
  }
  module.exports = words;
  return module.exports;
});

$__System.registerDynamic("2e", ["2c", "2d"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var deburr = $__require('2c'),
      words = $__require('2d');
  function arrayReduce(array, iteratee, accumulator, initAccum) {
    var index = -1,
        length = array.length;
    if (initAccum && length) {
      accumulator = array[++index];
    }
    while (++index < length) {
      accumulator = iteratee(accumulator, array[index], index, array);
    }
    return accumulator;
  }
  function createCompounder(callback) {
    return function(string) {
      return arrayReduce(words(deburr(string)), callback, '');
    };
  }
  var kebabCase = createCompounder(function(result, word, index) {
    return result + (index ? '-' : '') + word.toLowerCase();
  });
  module.exports = kebabCase;
  return module.exports;
});

$__System.registerDynamic("2f", ["26", "27", "2e"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  var forOwn = $__require('26');
  var escape = $__require('27');
  var kebabCase = $__require('2e');
  module.exports = function style(vnode) {
    var styles = [];
    var style = vnode.data.style || {};
    if (style.delayed) {
      _extends(style, style.delayed);
    }
    forOwn(style, function(value, key) {
      if (typeof value === 'string') {
        styles.push(kebabCase(key) + ': ' + escape(value));
      }
    });
    return styles.length ? 'style="' + styles.join('; ') + '"' : '';
  };
  return module.exports;
});

$__System.registerDynamic("30", ["18", "25", "2f"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var init = $__require('18');
  module.exports = init([$__require('25'), $__require('2f')]);
  return module.exports;
});

$__System.registerDynamic("12", ["2", "c", "10", "11", "13", "15", "30"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.helpers = undefined;
  exports.default = bitbox;
  exports.color = color;
  var _h = $__require('2');
  var _h2 = _interopRequireDefault(_h);
  var _component = $__require('c');
  var _helpers = $__require('10');
  var helpers = _interopRequireWildcard(_helpers);
  var _element = $__require('11');
  var _element2 = _interopRequireDefault(_element);
  var _color = $__require('13');
  var _color2 = _interopRequireDefault(_color);
  var _style = $__require('15');
  var _style2 = _interopRequireDefault(_style);
  var _index = $__require('30');
  var _index2 = _interopRequireDefault(_index);
  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};
      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key))
            newObj[key] = obj[key];
        }
      }
      newObj.default = obj;
      return newObj;
    }
  }
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0,
          arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }
      return arr2;
    } else {
      return Array.from(arr);
    }
  }
  bitbox.version = [1, 0, 3];
  bitbox.element = _element2.default;
  bitbox.render = _component.render;
  bitbox.patch = _component.patch;
  bitbox.style = _style2.default;
  bitbox.color = color;
  bitbox.text = function(props, text) {
    return text;
  };
  bitbox.h = _h2.default;
  bitbox.html = _index2.default;
  function bitbox() {
    return _component.component.apply(undefined, arguments);
  }
  function color(a) {
    return Array.isArray(a) ? _color2.default.apply(undefined, _toConsumableArray(a)) : _color2.default.apply(undefined, arguments);
  }
  exports.helpers = helpers;
  return module.exports;
});

$__System.registerDynamic("31", ["32"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var nativeCreate = $__require('32');
  var objectProto = Object.prototype;
  function Hash() {}
  Hash.prototype = nativeCreate ? nativeCreate(null) : objectProto;
  module.exports = Hash;
  return module.exports;
});

$__System.registerDynamic("33", ["31", "34"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Hash = $__require('31'),
      Map = $__require('34');
  function mapClear() {
    this.__data__ = {
      'hash': new Hash,
      'map': Map ? new Map : [],
      'string': new Hash
    };
  }
  module.exports = mapClear;
  return module.exports;
});

$__System.registerDynamic("35", ["36"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var assocIndexOf = $__require('36');
  var arrayProto = Array.prototype;
  var splice = arrayProto.splice;
  function assocDelete(array, key) {
    var index = assocIndexOf(array, key);
    if (index < 0) {
      return false;
    }
    var lastIndex = array.length - 1;
    if (index == lastIndex) {
      array.pop();
    } else {
      splice.call(array, index, 1);
    }
    return true;
  }
  module.exports = assocDelete;
  return module.exports;
});

$__System.registerDynamic("37", ["38"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var hashHas = $__require('38');
  function hashDelete(hash, key) {
    return hashHas(hash, key) && delete hash[key];
  }
  module.exports = hashDelete;
  return module.exports;
});

$__System.registerDynamic("39", ["34", "35", "37", "3a"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Map = $__require('34'),
      assocDelete = $__require('35'),
      hashDelete = $__require('37'),
      isKeyable = $__require('3a');
  function mapDelete(key) {
    var data = this.__data__;
    if (isKeyable(key)) {
      return hashDelete(typeof key == 'string' ? data.string : data.hash, key);
    }
    return Map ? data.map['delete'](key) : assocDelete(data.map, key);
  }
  module.exports = mapDelete;
  return module.exports;
});

$__System.registerDynamic("3b", ["36"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var assocIndexOf = $__require('36');
  function assocGet(array, key) {
    var index = assocIndexOf(array, key);
    return index < 0 ? undefined : array[index][1];
  }
  module.exports = assocGet;
  return module.exports;
});

$__System.registerDynamic("3c", ["32"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var nativeCreate = $__require('32');
  var HASH_UNDEFINED = '__lodash_hash_undefined__';
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  function hashGet(hash, key) {
    if (nativeCreate) {
      var result = hash[key];
      return result === HASH_UNDEFINED ? undefined : result;
    }
    return hasOwnProperty.call(hash, key) ? hash[key] : undefined;
  }
  module.exports = hashGet;
  return module.exports;
});

$__System.registerDynamic("3d", ["34", "3b", "3c", "3a"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Map = $__require('34'),
      assocGet = $__require('3b'),
      hashGet = $__require('3c'),
      isKeyable = $__require('3a');
  function mapGet(key) {
    var data = this.__data__;
    if (isKeyable(key)) {
      return hashGet(typeof key == 'string' ? data.string : data.hash, key);
    }
    return Map ? data.map.get(key) : assocGet(data.map, key);
  }
  module.exports = mapGet;
  return module.exports;
});

$__System.registerDynamic("3e", ["36"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var assocIndexOf = $__require('36');
  function assocHas(array, key) {
    return assocIndexOf(array, key) > -1;
  }
  module.exports = assocHas;
  return module.exports;
});

$__System.registerDynamic("38", ["32"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var nativeCreate = $__require('32');
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  function hashHas(hash, key) {
    return nativeCreate ? hash[key] !== undefined : hasOwnProperty.call(hash, key);
  }
  module.exports = hashHas;
  return module.exports;
});

$__System.registerDynamic("3f", ["34", "3e", "38", "3a"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Map = $__require('34'),
      assocHas = $__require('3e'),
      hashHas = $__require('38'),
      isKeyable = $__require('3a');
  function mapHas(key) {
    var data = this.__data__;
    if (isKeyable(key)) {
      return hashHas(typeof key == 'string' ? data.string : data.hash, key);
    }
    return Map ? data.map.has(key) : assocHas(data.map, key);
  }
  module.exports = mapHas;
  return module.exports;
});

$__System.registerDynamic("34", ["40", "41"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var getNative = $__require('40'),
      root = $__require('41');
  var Map = getNative(root, 'Map');
  module.exports = Map;
  return module.exports;
});

$__System.registerDynamic("42", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  function eq(value, other) {
    return value === other || (value !== value && other !== other);
  }
  module.exports = eq;
  return module.exports;
});

$__System.registerDynamic("36", ["42"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var eq = $__require('42');
  function assocIndexOf(array, key) {
    var length = array.length;
    while (length--) {
      if (eq(array[length][0], key)) {
        return length;
      }
    }
    return -1;
  }
  module.exports = assocIndexOf;
  return module.exports;
});

$__System.registerDynamic("43", ["36"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var assocIndexOf = $__require('36');
  function assocSet(array, key, value) {
    var index = assocIndexOf(array, key);
    if (index < 0) {
      array.push([key, value]);
    } else {
      array[index][1] = value;
    }
  }
  module.exports = assocSet;
  return module.exports;
});

$__System.registerDynamic("44", ["45"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var isObject = $__require('45');
  var funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]';
  var objectProto = Object.prototype;
  var objectToString = objectProto.toString;
  function isFunction(value) {
    var tag = isObject(value) ? objectToString.call(value) : '';
    return tag == funcTag || tag == genTag;
  }
  module.exports = isFunction;
  return module.exports;
});

$__System.registerDynamic("46", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  function isHostObject(value) {
    var result = false;
    if (value != null && typeof value.toString != 'function') {
      try {
        result = !!(value + '');
      } catch (e) {}
    }
    return result;
  }
  module.exports = isHostObject;
  return module.exports;
});

$__System.registerDynamic("45", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  function isObject(value) {
    var type = typeof value;
    return !!value && (type == 'object' || type == 'function');
  }
  module.exports = isObject;
  return module.exports;
});

$__System.registerDynamic("47", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var funcToString = Function.prototype.toString;
  function toSource(func) {
    if (func != null) {
      try {
        return funcToString.call(func);
      } catch (e) {}
      try {
        return (func + '');
      } catch (e) {}
    }
    return '';
  }
  module.exports = toSource;
  return module.exports;
});

$__System.registerDynamic("48", ["44", "46", "45", "47"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var isFunction = $__require('44'),
      isHostObject = $__require('46'),
      isObject = $__require('45'),
      toSource = $__require('47');
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
  var reIsHostCtor = /^\[object .+?Constructor\]$/;
  var objectProto = Object.prototype;
  var funcToString = Function.prototype.toString;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
  function isNative(value) {
    if (!isObject(value)) {
      return false;
    }
    var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
  }
  module.exports = isNative;
  return module.exports;
});

$__System.registerDynamic("40", ["48"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var isNative = $__require('48');
  function getNative(object, key) {
    var value = object[key];
    return isNative(value) ? value : undefined;
  }
  module.exports = getNative;
  return module.exports;
});

$__System.registerDynamic("32", ["40"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var getNative = $__require('40');
  var nativeCreate = getNative(Object, 'create');
  module.exports = nativeCreate;
  return module.exports;
});

$__System.registerDynamic("49", ["32"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var nativeCreate = $__require('32');
  var HASH_UNDEFINED = '__lodash_hash_undefined__';
  function hashSet(hash, key, value) {
    hash[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  }
  module.exports = hashSet;
  return module.exports;
});

$__System.registerDynamic("3a", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  function isKeyable(value) {
    var type = typeof value;
    return type == 'number' || type == 'boolean' || (type == 'string' && value != '__proto__') || value == null;
  }
  module.exports = isKeyable;
  return module.exports;
});

$__System.registerDynamic("4a", ["34", "43", "49", "3a"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Map = $__require('34'),
      assocSet = $__require('43'),
      hashSet = $__require('49'),
      isKeyable = $__require('3a');
  function mapSet(key, value) {
    var data = this.__data__;
    if (isKeyable(key)) {
      hashSet(typeof key == 'string' ? data.string : data.hash, key, value);
    } else if (Map) {
      data.map.set(key, value);
    } else {
      assocSet(data.map, key, value);
    }
    return this;
  }
  module.exports = mapSet;
  return module.exports;
});

$__System.registerDynamic("4b", ["33", "39", "3d", "3f", "4a"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var mapClear = $__require('33'),
      mapDelete = $__require('39'),
      mapGet = $__require('3d'),
      mapHas = $__require('3f'),
      mapSet = $__require('4a');
  function MapCache(values) {
    var index = -1,
        length = values ? values.length : 0;
    this.clear();
    while (++index < length) {
      var entry = values[index];
      this.set(entry[0], entry[1]);
    }
  }
  MapCache.prototype.clear = mapClear;
  MapCache.prototype['delete'] = mapDelete;
  MapCache.prototype.get = mapGet;
  MapCache.prototype.has = mapHas;
  MapCache.prototype.set = mapSet;
  module.exports = MapCache;
  return module.exports;
});

$__System.registerDynamic("4c", ["4b"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var MapCache = $__require('4b');
  var FUNC_ERROR_TEXT = 'Expected a function';
  function memoize(func, resolver) {
    if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    var memoized = function() {
      var args = arguments,
          key = resolver ? resolver.apply(this, args) : args[0],
          cache = memoized.cache;
      if (cache.has(key)) {
        return cache.get(key);
      }
      var result = func.apply(this, args);
      memoized.cache = cache.set(key, result);
      return result;
    };
    memoized.cache = new (memoize.Cache || MapCache);
    return memoized;
  }
  memoize.Cache = MapCache;
  module.exports = memoize;
  return module.exports;
});

$__System.registerDynamic("4d", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  function checkGlobal(value) {
    return (value && value.Object === Object) ? value : null;
  }
  module.exports = checkGlobal;
  return module.exports;
});

$__System.registerDynamic("41", ["4d"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var checkGlobal = $__require('4d');
  var objectTypes = {
    'function': true,
    'object': true
  };
  var freeExports = (objectTypes[typeof exports] && exports && !exports.nodeType) ? exports : undefined;
  var freeModule = (objectTypes[typeof module] && module && !module.nodeType) ? module : undefined;
  var freeGlobal = checkGlobal(freeExports && freeModule && typeof global == 'object' && global);
  var freeSelf = checkGlobal(objectTypes[typeof self] && self);
  var freeWindow = checkGlobal(objectTypes[typeof window] && window);
  var thisGlobal = checkGlobal(objectTypes[typeof this] && this);
  var root = freeGlobal || ((freeWindow !== (thisGlobal && thisGlobal.window)) && freeWindow) || freeSelf || thisGlobal || Function('return this')();
  module.exports = root;
  return module.exports;
});

$__System.registerDynamic("4e", ["41"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var root = $__require('41');
  var Symbol = root.Symbol;
  module.exports = Symbol;
  return module.exports;
});

$__System.registerDynamic("4f", ["4e", "50"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Symbol = $__require('4e'),
      isSymbol = $__require('50');
  var INFINITY = 1 / 0;
  var symbolProto = Symbol ? Symbol.prototype : undefined,
      symbolToString = symbolProto ? symbolProto.toString : undefined;
  function toString(value) {
    if (typeof value == 'string') {
      return value;
    }
    if (value == null) {
      return '';
    }
    if (isSymbol(value)) {
      return symbolToString ? symbolToString.call(value) : '';
    }
    var result = (value + '');
    return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
  }
  module.exports = toString;
  return module.exports;
});

$__System.registerDynamic("51", ["4c", "4f"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var memoize = $__require('4c'),
      toString = $__require('4f');
  var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]/g;
  var reEscapeChar = /\\(\\)?/g;
  var stringToPath = memoize(function(string) {
    var result = [];
    toString(string).replace(rePropName, function(match, number, quote, string) {
      result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
    });
    return result;
  });
  module.exports = stringToPath;
  return module.exports;
});

$__System.registerDynamic("52", ["53", "51"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var isArray = $__require('53'),
      stringToPath = $__require('51');
  function castPath(value) {
    return isArray(value) ? value : stringToPath(value);
  }
  module.exports = castPath;
  return module.exports;
});

$__System.registerDynamic("53", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var isArray = Array.isArray;
  module.exports = isArray;
  return module.exports;
});

$__System.registerDynamic("54", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  function isObjectLike(value) {
    return !!value && typeof value == 'object';
  }
  module.exports = isObjectLike;
  return module.exports;
});

$__System.registerDynamic("50", ["54"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var isObjectLike = $__require('54');
  var symbolTag = '[object Symbol]';
  var objectProto = Object.prototype;
  var objectToString = objectProto.toString;
  function isSymbol(value) {
    return typeof value == 'symbol' || (isObjectLike(value) && objectToString.call(value) == symbolTag);
  }
  module.exports = isSymbol;
  return module.exports;
});

$__System.registerDynamic("55", ["53", "50"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var isArray = $__require('53'),
      isSymbol = $__require('50');
  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      reIsPlainProp = /^\w*$/;
  function isKey(value, object) {
    var type = typeof value;
    if (type == 'number' || type == 'symbol') {
      return true;
    }
    return !isArray(value) && (isSymbol(value) || reIsPlainProp.test(value) || !reIsDeepProp.test(value) || (object != null && value in Object(object)));
  }
  module.exports = isKey;
  return module.exports;
});

$__System.registerDynamic("56", ["52", "55"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var castPath = $__require('52'),
      isKey = $__require('55');
  function baseGet(object, path) {
    path = isKey(path, object) ? [path] : castPath(path);
    var index = 0,
        length = path.length;
    while (object != null && index < length) {
      object = object[path[index++]];
    }
    return (index && index == length) ? object : undefined;
  }
  module.exports = baseGet;
  return module.exports;
});

$__System.registerDynamic("57", ["56"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var baseGet = $__require('56');
  function get(object, path, defaultValue) {
    var result = object == null ? undefined : baseGet(object, path);
    return result === undefined ? defaultValue : result;
  }
  module.exports = get;
  return module.exports;
});

$__System.registerDynamic("58", ["59"], true, function($__require, exports, module) {
  var process = $__require("59");
  var define,
      global = this,
      GLOBAL = this;
  var createStateArg = function(action, model, isAsync, compute) {
    var createStateObject = function(parentPath) {
      var state = Object.keys(model.accessors || {}).reduce(function(state, accessor) {
        state[accessor] = function() {
          var args = [].slice.call(arguments);
          var path = [];
          if (args[0] && Array.isArray(args[0])) {
            path = args.shift();
          } else if (args[0] && typeof args[0] === 'string') {
            path = args.shift().split('.');
          }
          if (accessor === 'get' && typeof arguments[0] === 'function') {
            return compute.getComputedValue(arguments[0]);
          }
          return model.accessors[accessor].apply(null, [parentPath.concat(path)].concat(args));
        };
        return state;
      }, {});
      Object.keys(model.mutators || {}).reduce(function(state, mutator) {
        state[mutator] = function() {
          if (isAsync) {
            throw new Error('Cerebral: You can not mutate state in async actions. Output values and set them with a sync action');
          }
          var path = [];
          var args = [].slice.call(arguments);
          if (Array.isArray(args[0])) {
            path = args.shift();
          } else if (typeof args[0] === 'string') {
            path = args.shift().split('.');
          }
          action.mutations.push({
            name: mutator,
            path: parentPath.concat(path),
            args: args
          });
          return model.mutators[mutator].apply(null, [parentPath.concat(path)].concat(args));
        };
        return state;
      }, state);
      state.select = function(path) {
        return createStateObject(typeof path === 'string' ? path.split('.') : path);
      };
      return state;
    };
    return createStateObject([]);
  };
  var convertServices = function(action, path, modulesPaths, services, proto) {
    return Object.keys(services).reduce(function(newservices, key) {
      path.push(key);
      if (typeof services[key] === 'function' && services[key].constructor.name === 'Function' && !Object.keys(services[key]).length && (!services[key].prototype || !Object.keys(services[key].prototype).length)) {
        var servicePath = path.slice();
        var method = servicePath.pop();
        newservices[key] = function() {
          action.serviceCalls.push({
            name: servicePath.join('.'),
            method: method,
            args: [].slice.call(arguments)
          });
          return services[key].apply(this, arguments);
        };
      } else if (typeof services[key] === 'object' && !Array.isArray(services[key]) && services[key] !== null && modulesPaths.indexOf(path.join('.')) >= 0) {
        newservices[key] = convertServices(action, path, modulesPaths, services[key], proto);
      } else {
        newservices[key] = services[key];
      }
      path.pop(key);
      return newservices;
    }, {});
  };
  var createServicesArg = function(action, services, modules) {
    var path = [];
    return convertServices(action, path, modules, services);
  };
  module.exports = {
    sync: function(action, signalArgs, model, compute, services, modulesPaths) {
      return [signalArgs, createStateArg(action, model, false, compute), createServicesArg(action, services, modulesPaths)];
    },
    async: function(action, signalArgs, model, compute, services, modulesPaths) {
      return [signalArgs, createStateArg(action, model, true, compute), createServicesArg(action, services, modulesPaths)];
    }
  };
  return module.exports;
});

$__System.registerDynamic("5a", ["5b", "5c", "59"], true, function($__require, exports, module) {
  var process = $__require("59");
  var define,
      global = this,
      GLOBAL = this;
  var utils = $__require('5b');
  var types = $__require('5c');
  var validateOutput = function(action, path, arg, signalName) {
    if ((!action.output && !action.outputs) || Array.isArray(action.outputs)) {
      return;
    }
    var checkers = action.output || action.outputs[path || action.defaultOutput];
    if (checkers === undefined) {
      return;
    }
    if (!arg) {
      throw new Error(['Cerebral: There is a wrong output of action "' + utils.getFunctionName(action) + '" ' + 'in signal "' + signalName + '". You did not pass any values to the output'].join(''));
    }
    Object.keys(checkers).forEach(function(key) {
      if (!types(checkers[key], arg[key])) {
        throw new Error(['Cerebral: There is a wrong output of action "' + utils.getFunctionName(action) + '" ' + 'in signal "' + signalName + '". Check the following prop: "' + key + '"'].join(''));
      }
    });
  };
  var createNextFunction = function(action, signalName, resolver) {
    var next = function() {
      if (next.hasRun) {
        throw new Error('Cerebral - You are running an async output on a synchronous action in ' + signalName + '. The action is ' + action.name + '. Either put it in an array or make sure the output is synchronous');
      }
      var path = typeof arguments[0] === 'string' ? arguments[0] : null;
      var arg = path ? arguments[1] : arguments[0];
      if (utils.isDeveloping()) {
        try {
          JSON.stringify(arg);
        } catch (e) {
          console.log('Not serializable', arg);
          throw new Error('Cerebral - Could not serialize output. Please check signal ' + signalName + ' and action ' + action.name);
        }
      }
      if (!path && !action.defaultOutput && action.outputs) {
        throw new Error(['Cerebral: There is a wrong output of action "' + utils.getFunctionName(action) + '" ' + 'in signal "' + signalName + '". Set defaultOutput or use one of outputs ' + JSON.stringify(Object.keys(action.output || action.outputs))].join(''));
      }
      if (utils.isDeveloping()) {
        validateOutput(action, path, arg, signalName);
      }
      var result = {
        path: path || action.defaultOutput,
        arg: arg
      };
      if (resolver) {
        resolver(result);
      } else {
        next._result = result;
      }
    };
    return next;
  };
  var addOutputs = function(action, next) {
    if (!action.outputs) {
      next.success = next.bind(null, 'success');
      next.error = next.bind(null, 'error');
    } else if (Array.isArray(action.outputs)) {
      action.outputs.forEach(function(key) {
        next[key] = next.bind(null, key);
      });
    } else {
      Object.keys(action.outputs).forEach(function(key) {
        next[key] = next.bind(null, key);
      });
    }
  };
  module.exports = {
    sync: function(action, signalName) {
      var next = createNextFunction(action, signalName);
      addOutputs(action, next);
      if (utils.isDeveloping()) {
        setTimeout(function() {
          next.hasRun = true;
        }, 0);
      }
      return next;
    },
    async: function(action, signalName) {
      var resolver = null;
      var promise = new Promise(function(resolve) {
        resolver = resolve;
      });
      var next = createNextFunction(action, signalName, resolver);
      addOutputs(action, next);
      return {
        fn: next,
        promise: promise
      };
    }
  };
  return module.exports;
});

$__System.registerDynamic("5d", ["5b", "59"], true, function($__require, exports, module) {
  var process = $__require("59");
  var define,
      global = this,
      GLOBAL = this;
  var utils = $__require('5b');
  module.exports = function(signalName, actions) {
    var traverse = function(actions, parentActions, parentIndex) {
      actions.forEach(function(action, index) {
        var nextPaths;
        if (typeof action === 'undefined') {
          throw new Error(['Cerebral: Action number "' + index + '" in signal "' + signalName + '" does not exist. Check that you have spelled it correctly!'].join(''));
        }
        if (Array.isArray(action)) {
          traverse(action, actions, index);
        } else {
          nextPaths = actions[index + 1];
          if (action.output && ((parentActions && typeof nextPaths === 'function') || (!parentActions && (typeof nextPaths !== 'function' || !nextPaths)) || (parentActions && typeof parentActions[parentIndex + 1] !== 'function'))) {
            throw new Error(['Cerebral: The action "' + utils.getFunctionName(action) + '" in signal "' + signalName + '" has an output definition, but there is ' + 'no action to receive it. ' + (nextPaths ? 'But there are ' + JSON.stringify(Object.keys(nextPaths)) + ' paths, should it be outputs?' : '')].join(''));
          } else if (action.outputs && (!nextPaths || typeof nextPaths === 'function')) {
            throw new Error(['Cerebral: The action "' + utils.getFunctionName(action) + '" in signal "' + signalName + '" has an output value. ' + 'There should be these paths: ' + JSON.stringify(Array.isArray(action.outputs) ? action.outputs : Object.keys(action.outputs))].join(''));
          } else if (Array.isArray(action.outputs)) {
            nextPaths = actions[index + 1];
            action.outputs.forEach(function(output) {
              if (!Array.isArray(nextPaths[output])) {
                throw new Error(['Cerebral: The action "' + utils.getFunctionName(action) + '" in signal "' + signalName + '" can not find path to its "' + output + '" output'].join(''));
              }
            });
          } else if (action.outputs) {
            Object.keys(action.outputs).forEach(function(output) {
              if (!Array.isArray(nextPaths[output])) {
                throw new Error(['Cerebral: The action "' + utils.getFunctionName(action) + '" in signal "' + signalName + '" can not find path to its "' + output + '" output'].join(''));
              }
            });
          } else if (!Array.isArray(action) && typeof action === 'object' && action !== null) {
            var prevAction = actions[index - 1];
            Object.keys(action).forEach(function(key) {
              if (!Array.isArray(action[key])) {
                throw new Error(['Cerebral: The paths for action "' + utils.getFunctionName(prevAction) + '" in signal "' + signalName + '" are not valid. They have to be an array"'].join(''));
              }
            });
          }
        }
      });
    };
    traverse(actions);
  };
  return module.exports;
});

$__System.registerDynamic("5e", ["5b", "59"], true, function($__require, exports, module) {
  var process = $__require("59");
  var define,
      global = this,
      GLOBAL = this;
  var utils = $__require('5b');
  var traverse = function(item, parentItem, path, actions, isSync) {
    var nextItem;
    var returnAsync = function(item) {
      isSync = !isSync;
      return item.map(function(subItem, index) {
        path.push(index);
        var result = traverse(subItem, item, path, actions, isSync);
        path.pop();
        return result;
      }).filter(function(action) {
        return !!action;
      });
    };
    if (typeof item === 'function' && item.async && isSync) {
      nextItem = parentItem[parentItem.indexOf(item) + 1];
      if (!Array.isArray(nextItem) && typeof nextItem === 'object') {
        parentItem.splice(parentItem.indexOf(nextItem), 1);
        return returnAsync([item, nextItem]);
      } else {
        return returnAsync([item]);
      }
    } else if (Array.isArray(item)) {
      item = item.slice();
      return returnAsync(item);
    } else if (typeof item === 'function') {
      var action = {
        name: item.displayName || utils.getFunctionName(item),
        input: {},
        output: null,
        duration: 0,
        mutations: [],
        serviceCalls: [],
        isAsync: !isSync,
        outputPath: null,
        isExecuting: false,
        hasExecuted: false,
        path: path.slice(),
        outputs: null,
        actionIndex: actions.indexOf(item) === -1 ? actions.push(item) - 1 : actions.indexOf(item)
      };
      nextItem = parentItem[parentItem.indexOf(item) + 1];
      if (!Array.isArray(nextItem) && typeof nextItem === 'object') {
        parentItem.splice(parentItem.indexOf(nextItem), 1);
        action.outputs = Object.keys(nextItem).reduce(function(paths, key) {
          path = path.concat('outputs', key);
          paths[key] = traverse(nextItem[key], parentItem, path, actions, false);
          path.pop();
          path.pop();
          return paths;
        }, {});
      }
      return action;
    }
  };
  module.exports = function(signals) {
    var actions = [];
    var branches = traverse(signals, [], [], actions, false);
    return {
      branches: branches,
      actions: actions
    };
  };
  return module.exports;
});

$__System.registerDynamic("5f", ["5b", "59"], true, function($__require, exports, module) {
  var process = $__require("59");
  var define,
      global = this,
      GLOBAL = this;
  var utils = $__require('5b');
  module.exports = function(modules, state, services, signalName, actionName) {
    var modulesArg = {};
    Object.keys(modules).forEach(function(key) {
      var path = modules[key].path;
      var module = {
        name: modules[key].name,
        path: modules[key].path,
        meta: modules[key].meta
      };
      module.state = Object.keys(state).reduce(function(module, key) {
        module[key] = function() {
          console.warn('Signal "' + signalName + '" with action "' + actionName + '" calls STATE on its module/modules arg. This is DEPRECATED, the module arg will be removed and modules will expose the same data as to components. Please use normal STATE and SERVICES arg');
          var args = [].slice.call(arguments);
          var statePath = path;
          if (args[0] && Array.isArray(args[0])) {
            statePath = statePath.concat(args.shift());
          } else if (args[0] && typeof args[0] === 'string') {
            statePath = statePath.concat(args.shift().split('.'));
          }
          return state[key].apply(null, [statePath].concat(args));
        };
        return module;
      }, {});
      module.services = path.reduce(function(services, key) {
        return services ? services[key] : null;
      }, services);
      utils.setDeep(modulesArg, key, module);
    });
    return modulesArg;
  };
  return module.exports;
});

$__System.registerDynamic("60", ["5b", "58", "5a", "5d", "5e", "5f", "59"], true, function($__require, exports, module) {
  var process = $__require("59");
  var define,
      global = this,
      GLOBAL = this;
  var utils = $__require('5b');
  var createActionArgs = $__require('58');
  var createNext = $__require('5a');
  var analyze = $__require('5d');
  var staticTree = $__require('5e');
  var createModulesArg = $__require('5f');
  var requestAnimationFrame = global.requestAnimationFrame || function(cb) {
    setTimeout(cb, 0);
  };
  module.exports = function(controller, model, services, compute, modules) {
    var currentlyRunningSignals = 0;
    var batchedSignals = [];
    var pending = false;
    controller.isExecuting = function() {
      return Boolean(currentlyRunningSignals);
    };
    return function() {
      var args = [].slice.call(arguments);
      var signalName = args.shift();
      var defaultOptions = args[1] || {};
      defaultOptions.modulePath = defaultOptions.modulePath || [];
      var chain = args[0] || [];
      if (utils.isDeveloping()) {
        analyze(signalName, chain);
      }
      var signalChain = function(payload, options) {
        options = options || {};
        var tree = staticTree(signalChain.chain);
        var actions = tree.actions;
        var signal = {
          name: signalName,
          start: null,
          isSync: defaultOptions.immediate || options.immediate,
          isRouted: options.isRouted || false,
          isExecuting: false,
          isPrevented: false,
          isRecorded: options.isRecorded || false,
          branches: tree.branches,
          options: options,
          duration: 0,
          input: payload,
          preventSignalRun: function() {
            signal.isExecuting = false;
            signal.isPrevented = true;
          }
        };
        if (defaultOptions.isSync || options.isSync) {
          console.warn('Cerebral: isSync signal option is DEPRECATED. Please use immediate option instead.');
          signal.isSync = true;
        }
        var isPredefinedExecution = false;
        if (options.branches) {
          signal.isSync = true;
          signal.branches = options.branches;
          isPredefinedExecution = true;
          controller.emit('predefinedSignal', {signal: signal});
        } else {
          var prevIsSync = signal.isSync;
          controller.emit('signalTrigger', {signal: signal});
          if (prevIsSync !== signal.isSync) {
            console.warn('Cerebral: You are running an older version of the cerebral-module-router. Please update the package');
          }
        }
        if (signal.isPrevented) {
          return;
        }
        var runSignal = function() {
          var signalArgs = utils.merge({}, payload || {});
          if (utils.isDeveloping()) {
            try {
              JSON.stringify(signalArgs);
            } catch (e) {
              console.log('Not serializable', signalArgs);
              throw new Error('Cerebral - Could not serialize input to signal. Please check signal ' + signalName);
            }
          }
          signal.start = Date.now();
          signal.isExecuting = true;
          if (!isPredefinedExecution) {
            currentlyRunningSignals++;
            controller.emit('signalStart', {signal: signal});
          }
          if (signal.isPrevented) {
            console.warn('Cerebral: Preventing signal, ' + signal.name + ', after signalStart is deprecated. Use `signalTrigger` event instead.');
            currentlyRunningSignals--;
            controller.emit('signalEnd', {signal: signal});
            return;
          }
          var runBranch = function(branch, index, start) {
            var currentBranch = branch[index];
            if (!currentBranch && branch === signal.branches && !isPredefinedExecution) {
              if (branch[index - 1]) {
                branch[index - 1].duration = Date.now() - start;
              }
              signal.isExecuting = false;
              currentlyRunningSignals--;
              controller.emit('signalEnd', {signal: signal});
              controller.emit('change', {signal: signal});
              return;
            }
            if (!currentBranch) {
              return;
            }
            if (Array.isArray(currentBranch)) {
              if (isPredefinedExecution) {
                currentBranch.forEach(function(action) {
                  if (action.signals) {
                    action.signals.forEach(function(signal) {
                      var signalMethodPath = signal.name.split('.').reduce(function(signals, key) {
                        return signals[key];
                      }, controller.getSignals());
                      signalMethodPath(signal.input, {branches: signal.branches});
                    });
                  }
                  utils.merge(signalArgs, action.output);
                  if (action.outputPath) {
                    runBranch(action.outputs[action.outputPath], 0);
                  }
                });
                runBranch(branch, index + 1);
              } else {
                var promises = currentBranch.map(function(action) {
                  controller.emit('actionStart', {
                    action: action,
                    signal: signal
                  });
                  var actionFunc = actions[action.actionIndex];
                  var inputArg = actionFunc.defaultInput ? utils.merge({}, actionFunc.defaultInput, signalArgs) : signalArgs;
                  var actionArgs = createActionArgs.async(action, inputArg, model, compute, services, Object.keys(modules));
                  if (utils.isDeveloping() && actionFunc.input) {
                    utils.verifyInput(action.name, signal.name, actionFunc.input, inputArg);
                  }
                  action.isExecuting = true;
                  action.input = utils.merge({}, inputArg);
                  var next = createNext.async(actionFunc, signal.name);
                  var modulesArg = createModulesArg(modules, actionArgs[1], actionArgs[2], signal.name, action.name);
                  var actionArg = {
                    input: actionArgs[0],
                    state: actionArgs[1],
                    output: next.fn,
                    services: actionArgs[2],
                    modules: modulesArg,
                    module: defaultOptions.modulePath.reduce(function(modules, key) {
                      return modules[key];
                    }, modulesArg)
                  };
                  if (utils.isDeveloping()) {
                    try {
                      actionFunc(actionArg);
                    } catch (e) {
                      action.error = {
                        name: e.name,
                        message: e.message,
                        stack: actionFunc.toString()
                      };
                      controller.emit('signalError', {
                        action: action,
                        signal: signal
                      });
                      controller.emit('change', {signal: signal});
                      throw e;
                    }
                  } else {
                    actionFunc(actionArg);
                  }
                  return next.promise.then(function(result) {
                    action.hasExecuted = true;
                    action.isExecuting = false;
                    action.output = utils.merge({}, result.arg);
                    utils.merge(signalArgs, result.arg);
                    controller.emit('actionEnd', {
                      action: action,
                      signal: signal
                    });
                    controller.emit('change', {signal: signal});
                    if (result.path) {
                      action.outputPath = result.path;
                      var branchResult = runBranch(action.outputs[result.path], 0, Date.now());
                      return branchResult;
                    }
                  });
                });
                controller.emit('change', {signal: signal});
                return Promise.all(promises).then(function() {
                  return runBranch(branch, index + 1, Date.now());
                }).catch(function(error) {
                  controller.emit('error', error);
                  throw error;
                });
              }
            } else {
              var action = currentBranch;
              if (isPredefinedExecution) {
                action.mutations.forEach(function(mutation) {
                  model.mutators[mutation.name].apply(null, [mutation.path.slice()].concat(mutation.args));
                });
                if (action.outputPath) {
                  runBranch(action.outputs[action.outputPath], 0);
                }
                runBranch(branch, index + 1);
              } else {
                controller.emit('actionStart', {
                  action: action,
                  signal: signal
                });
                var actionFunc = actions[action.actionIndex];
                var inputArg = actionFunc.defaultInput ? utils.merge({}, actionFunc.defaultInput, signalArgs) : signalArgs;
                var actionArgs = createActionArgs.sync(action, inputArg, model, compute, services, Object.keys(modules));
                if (utils.isDeveloping() && actionFunc.input) {
                  utils.verifyInput(action.name, signal.name, actionFunc.input, inputArg);
                }
                action.mutations = [];
                action.input = utils.merge({}, inputArg);
                var next = createNext.sync(actionFunc, signal.name);
                var modulesArg = createModulesArg(modules, actionArgs[1], actionArgs[2], signal.name, action.name);
                var actionArg = {
                  input: actionArgs[0],
                  state: actionArgs[1],
                  output: next,
                  services: actionArgs[2],
                  modules: modulesArg,
                  module: defaultOptions.modulePath.reduce(function(exportedModule, key) {
                    return exportedModule[key];
                  }, modulesArg)
                };
                if (utils.isDeveloping()) {
                  try {
                    actionFunc(actionArg);
                  } catch (e) {
                    action.error = {
                      name: e.name,
                      message: e.message,
                      stack: e.stack
                    };
                    controller.emit('signalError', {
                      action: action,
                      signal: signal
                    });
                    controller.emit('change', {signal: signal});
                    throw e;
                  }
                } else {
                  actionFunc(actionArg);
                }
                var result = next._result || {};
                utils.merge(signalArgs, result.arg);
                action.isExecuting = false;
                action.hasExecuted = true;
                action.output = utils.merge({}, result.arg);
                if (!branch[index + 1] || Array.isArray(branch[index + 1])) {
                  action.duration = Date.now() - start;
                }
                if (result.path) {
                  action.outputPath = result.path;
                  var branchResult = runBranch(action.outputs[result.path], 0, start);
                  if (branchResult && branchResult.then) {
                    return branchResult.then(function() {
                      return runBranch(branch, index + 1, Date.now());
                    });
                  } else {
                    return runBranch(branch, index + 1, start);
                  }
                } else if (result.then) {
                  return result.then(function() {
                    controller.emit('actionEnd', {
                      action: action,
                      signal: signal
                    });
                    return runBranch(branch, index + 1, start);
                  });
                } else {
                  controller.emit('actionEnd', {
                    action: action,
                    signal: signal
                  });
                  return runBranch(branch, index + 1, start);
                }
              }
            }
          };
          runBranch(signal.branches, 0, Date.now());
          return;
        };
        if (signal.isSync) {
          runSignal();
        } else {
          batchedSignals.push(runSignal);
          if (!pending) {
            requestAnimationFrame(function() {
              while (batchedSignals.length) {
                batchedSignals.shift()();
              }
              pending = false;
            });
            pending = true;
          }
        }
      };
      signalChain.chain = chain;
      signalChain.sync = function(payload) {
        console.warn('Cerebral: Signal ' + signalName + ' uses signal.sync(), but it is DEPRECATED. Please use signal(payload, {immediate: true}) instead or define it as sync using object signal definition.');
        signalChain(payload, {immediate: true});
      };
      signalChain.signalName = signalName;
      return signalChain;
    };
  };
  return module.exports;
});

$__System.registerDynamic("61", ["5b", "59"], true, function($__require, exports, module) {
  var process = $__require("59");
  var define,
      global = this,
      GLOBAL = this;
  var utils = $__require('5b');
  module.exports = function SignalStore() {
    return function(module, controller) {
      var signals = [];
      var isRemembering = false;
      var currentIndex = signals.length - 1;
      var hasRememberedInitial = false;
      var asyncActionsRunning = [];
      var addAsyncAction = function(action) {
        asyncActionsRunning.push(action);
      };
      var removeAsyncAction = function(action) {
        asyncActionsRunning.splice(asyncActionsRunning.indexOf(action), 1);
      };
      var addSignal = function(signal) {
        if (utils.isDeveloping() && !isRemembering) {
          if (asyncActionsRunning.length) {
            var currentAction = asyncActionsRunning[asyncActionsRunning.length - 1];
            currentAction.signals = currentAction.signals || [];
            currentAction.signals.push(signal);
          } else {
            currentIndex++;
            signals.push(signal);
          }
        }
      };
      var services = {
        rememberNow: function() {
          if (!signals.length) {
            return;
          }
          currentIndex = signals.length - 1;
          this.remember(currentIndex);
        },
        reset: function() {
          if (!isRemembering) {
            signals = [];
            currentIndex = -1;
            controller.emit('reset');
          }
        },
        rememberInitial: function(index) {
          if (hasRememberedInitial) {
            return;
          }
          hasRememberedInitial = true;
          this.remember(index);
        },
        remember: function(index) {
          isRemembering = true;
          controller.emit('reset');
          if (index === -1) {
            currentIndex = index;
            isRemembering = false;
          } else {
            currentIndex = -1;
            try {
              for (var x = 0; x <= index; x++) {
                var signal = signals[x];
                if (!signal) {
                  break;
                }
                var signalMethodPath = signal.name.split('.').reduce(function(signals, key) {
                  return signals[key];
                }, controller.getSignals());
                signalMethodPath(signal.input, {branches: signal.branches});
                currentIndex = x;
              }
            } catch (e) {
              console.log(e);
              console.warn('CEREBRAL - There was an error remembering state, it has been reset');
              this.reset();
            }
          }
          controller.emit('change');
          isRemembering = false;
        },
        removeRunningSignals: function() {
          for (var x = 0; x < signals.length; x++) {
            if (signals[x].isExecuting) {
              signals.splice(x, 1);
              x--;
            }
          }
        },
        getSignals: function() {
          return signals;
        },
        setSignals: function(newSignals) {
          signals = signals.concat(newSignals);
        },
        isExecutingAsync: function() {
          return !!asyncActionsRunning.length;
        },
        isRemembering: function() {
          return isRemembering;
        },
        getCurrentIndex: function() {
          return currentIndex;
        }
      };
      module.services(services);
      controller.getStore = function getStore() {
        console.warn('Cerebral: controller.getStore() method is deprecated.');
        return services;
      };
      controller.on('signalTrigger', function(args) {
        var signal = args.signal;
        if (!isRemembering && currentIndex !== -1 && currentIndex < signals.length - 1) {
          signal.preventSignalRun();
          console.warn('Cerebral - Looking in the past, ignored signal ' + signal.name);
        }
      });
      controller.on('signalStart', function(args) {
        var signal = args.signal;
        if (!signal.isPrevented)
          addSignal(signal);
      });
      controller.on('actionStart', function(args) {
        var action = args.action;
        if (action.isAsync)
          addAsyncAction(args.action);
      });
      controller.on('actionEnd', function(args) {
        var action = args.action;
        if (action.isAsync)
          removeAsyncAction(args.action);
      });
    };
  };
  return module.exports;
});

$__System.registerDynamic("62", ["61", "5b", "59"], true, function($__require, exports, module) {
  var process = $__require("59");
  var define,
      global = this,
      GLOBAL = this;
  var MODULE = 'cerebral-module-devtools';
  var SignalStore = $__require('61');
  var utils = $__require('5b');
  module.exports = function Devtools() {
    if (typeof window === 'undefined') {
      return function() {};
    }
    return function init(module, controller) {
      module.alias(MODULE);
      module.modules({store: SignalStore()});
      var signalStore = controller.getServices()[module.name].store;
      var isInitialized = false;
      var disableDebugger = false;
      var willKeepState = false;
      var getDetail = function() {
        return JSON.stringify({
          signals: signalStore.getSignals(),
          willKeepState: willKeepState,
          disableDebugger: disableDebugger,
          currentSignalIndex: signalStore.getCurrentIndex(),
          isExecutingAsync: signalStore.isExecutingAsync(),
          isRemembering: signalStore.isRemembering(),
          computedPaths: []
        });
      };
      var update = utils.debounce(function() {
        if (disableDebugger) {
          return;
        }
        var event = new CustomEvent('cerebral.dev.update', {detail: getDetail()});
        window.dispatchEvent(event);
      }, 100);
      var initialize = function() {
        if (isInitialized)
          return;
        var signals = [];
        if (utils.hasLocalStorage()) {
          disableDebugger = JSON.parse(localStorage.getItem('cerebral_disable_debugger'));
          signals = JSON.parse(localStorage.getItem('cerebral_signals')) || [];
          willKeepState = JSON.parse(localStorage.getItem('cerebral_willKeepState'));
        }
        isInitialized = true;
        if (willKeepState && signalStore.isExecutingAsync()) {
          controller.once('signalEnd', function() {
            var event = new CustomEvent('cerebral.dev.cerebralPong', {detail: getDetail()});
            signalStore.setSignals(signals);
            signalStore.remember(signalStore.getSignals().length - 1);
            window.dispatchEvent(event);
          });
        } else {
          signalStore.setSignals(signals);
          signalStore.rememberInitial(signalStore.getSignals().length - 1);
          var event = new CustomEvent('cerebral.dev.cerebralPong', {detail: getDetail()});
          window.dispatchEvent(event);
        }
      };
      window.addEventListener('cerebral.dev.debuggerPing', function() {
        if (utils.isDeveloping()) {
          initialize();
        }
      });
      window.addEventListener('cerebral.dev.requestUpdate', function() {
        update();
      });
      window.addEventListener('cerebral.dev.toggleKeepState', function() {
        willKeepState = !willKeepState;
        update();
      });
      window.addEventListener('cerebral.dev.toggleDisableDebugger', function() {
        disableDebugger = !disableDebugger;
        if (disableDebugger && willKeepState) {
          willKeepState = !willKeepState;
        }
        var event = new CustomEvent('cerebral.dev.update', {detail: getDetail()});
        window.dispatchEvent(event);
      });
      window.addEventListener('cerebral.dev.resetStore', function() {
        signalStore.reset();
        controller.emit('change');
        update();
      });
      window.addEventListener('cerebral.dev.remember', function(event) {
        signalStore.remember(event.detail);
        update();
      });
      window.addEventListener('cerebral.dev.rememberNow', function(event) {
        signalStore.rememberNow();
        update();
      });
      window.addEventListener('cerebral.dev.rewrite', function(event) {
        signalStore.remember(event.detail);
        var signals = signalStore.getSignals();
        signals.splice(event.detail + 1, signals.length - 1 - event.detail);
        update();
      });
      window.addEventListener('cerebral.dev.logPath', function(event) {
        var name = event.detail.name;
        var value = controller.get(event.detail.path);
        console.log('CEREBRAL - ' + name + ':', value.toJS ? value.toJS() : value);
      });
      window.addEventListener('cerebral.dev.logModel', function(event) {
        console.log('CEREBRAL - model:', controller.logModel());
      });
      window.addEventListener('unload', function() {
        signalStore.removeRunningSignals();
        if (utils.hasLocalStorage()) {
          localStorage.setItem('cerebral_signals', isInitialized && willKeepState ? JSON.stringify(signalStore.getSignals()) : JSON.stringify([]));
          localStorage.setItem('cerebral_willKeepState', isInitialized && JSON.stringify(!!willKeepState));
          localStorage.setItem('cerebral_disable_debugger', isInitialized && JSON.stringify(!!disableDebugger));
        }
      });
      var services = {
        update: update,
        start: function() {
          console.warn('Cerebral: devtools.start() method is deprecated. Devtools has started automatically.');
        }
      };
      module.services(services);
      controller.getDevtools = function() {
        console.warn('Cerebral: controller.getDevtools() method is deprecated. Please upgrade your view package to latest version.');
        return services;
      };
      if (window.__CEREBRAL_DEVTOOLS_GLOBAL_HOOK__) {
        window.__CEREBRAL_DEVTOOLS_GLOBAL_HOOK__.signals = controller.getSignals();
      }
      var event = new CustomEvent('cerebral.dev.cerebralPing');
      window.dispatchEvent(event);
      controller.on('signalStart', update);
      controller.on('actionStart', update);
      controller.on('actionEnd', update);
      controller.on('signalEnd', update);
    };
  };
  return module.exports;
});

$__System.registerDynamic("63", ["5b", "62", "59"], true, function($__require, exports, module) {
  var process = $__require("59");
  var define,
      global = this,
      GLOBAL = this;
  var utils = $__require('5b');
  var Devtools = $__require('62');
  module.exports = function(controller, model, allModules) {
    var initialState = {};
    var registerSignals = function(moduleName, signals) {
      var scopedSignals = Object.keys(signals).reduce(function(scopedSignals, key) {
        scopedSignals[moduleName + '.' + key] = signals[key];
        return scopedSignals;
      }, {});
      return controller.addSignals(scopedSignals, {modulePath: moduleName.split('.')});
    };
    var registerSignalsSync = function(moduleName, signals) {
      var scopedSignals = Object.keys(signals).reduce(function(scopedSignals, key) {
        scopedSignals[moduleName + '.' + key] = signals[key];
        return scopedSignals;
      }, {});
      return controller.signalsSync(scopedSignals, {modulePath: moduleName.split('.')});
    };
    var registerServices = function(moduleName, services) {
      var scopedServices = Object.keys(services).reduce(function(scopedServices, key) {
        scopedServices[moduleName + '.' + key] = services[key];
        return scopedServices;
      }, {});
      controller.addServices(scopedServices);
    };
    var registerInitialState = function(moduleName, state) {
      utils.setDeep(initialState, moduleName, state);
      model.mutators.set(moduleName.split('.'), state);
    };
    var registerModules = function(parentModuleName, modules) {
      if (arguments.length === 1) {
        modules = parentModuleName;
        parentModuleName = null;
        if (utils.isDeveloping() && !modules.devtools && !controller.getModules().devtools) {
          modules.devtools = Devtools();
        }
      }
      Object.keys(modules).forEach(function(moduleName) {
        registerModule(moduleName, parentModuleName, modules);
      });
      if (arguments.length === 1) {
        controller.emit('modulesLoaded', {modules: allModules});
      }
      return allModules;
    };
    var registerModule = function(moduleName, parentModuleName, modules) {
      var moduleConstructor = modules[moduleName];
      var actualName = moduleName;
      if (parentModuleName) {
        moduleName = parentModuleName + '.' + moduleName;
      }
      var moduleExport = {
        name: actualName,
        path: moduleName.split('.')
      };
      var module = {
        name: moduleName,
        path: moduleExport.path.slice(),
        alias: function(alias) {
          allModules[alias] = moduleExport;
        },
        addSignals: registerSignals.bind(null, moduleName),
        signals: function() {
          console.warn('Cerebral: module.signals() is DEPRECATED. Please use module.addSignals() instead');
          module.addSignals.apply(module, arguments);
        },
        signalsSync: function() {
          console.warn('Cerebral: module.signalsSync() is DEPRECATED. Please use module.addSignals({mySignal: {chain: [], immediate: true}}) instead');
          registerSignalsSync.apply(module, [moduleName].concat([].slice.call(arguments)));
        },
        addServices: registerServices.bind(null, moduleName),
        services: function() {
          console.warn('Cerebral: module.services() is DEPRECATED. Please use module.addServices() instead');
          return module.addServices.apply(module, arguments);
        },
        addState: registerInitialState.bind(null, moduleName),
        state: function() {
          console.warn('Cerebral: module.state() is DEPRECATED. Please use module.addState() instead');
          module.addState.apply(module, arguments);
        },
        getSignals: function() {
          var signals = controller.getSignals();
          var path = moduleName.split('.');
          return path.reduce(function(signals, key) {
            return signals[key];
          }, signals);
        },
        addModules: registerModules.bind(null, moduleName),
        modules: function() {
          console.warn('Cerebral: module.modules() is DEPRECATED. Please use module.addModules() instead');
          module.addModules.apply(module, arguments);
        }
      };
      var constructedModule = moduleConstructor(module, controller);
      moduleExport.meta = constructedModule;
      module.meta = constructedModule;
      allModules[moduleName] = moduleExport;
      return moduleExport;
    };
    controller.on('reset', function() {
      model.mutators.merge([], initialState);
    });
    return registerModules;
  };
  return module.exports;
});

$__System.registerDynamic("64", ["59"], true, function($__require, exports, module) {
  var process = $__require("59");
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(model) {
    var registered = [];
    var computed = [];
    var cachedByRef = {};
    var createMapper = function(cb) {
      var initialRun = true;
      var currentState = {};
      var currentValue;
      var get = function(path) {
        var value;
        path = typeof path === 'string' ? path.split('.') : path;
        if (typeof path === 'function') {
          if (!has(path)) {
            registered.push(path);
            if (path.computedRef) {
              cachedByRef[path.computedRef] = path;
            }
            computed.push(createMapper(path));
          }
          value = currentState['COMPUTED_' + (path.computedRef ? path.computedRef : registered.indexOf(path))] = getComputedValue(path);
        } else {
          value = currentState[path.join('.%.')] = model.accessors.get(path);
        }
        return value;
      };
      return function() {
        var hasChanged = Object.keys(currentState).reduce(function(hasChanged, key) {
          if (hasChanged) {
            return true;
          }
          if (key.indexOf('COMPUTED') === 0) {
            var index = key.substr(9);
            return getComputedValue(registered[index] || cachedByRef[index]) !== currentState[key];
          } else {
            return model.accessors.get(key.split('.%.')) !== currentState[key];
          }
        }, false);
        if (hasChanged || initialRun) {
          currentState = {};
          initialRun = false;
          currentValue = cb(get);
        }
        return currentValue;
      };
    };
    var has = function(computedFunc) {
      if (computedFunc.computedRef) {
        return !!cachedByRef[computedFunc.computedRef];
      } else {
        return registered.indexOf(computedFunc) !== -1;
      }
    };
    var getComputedValue = function(computedFunc) {
      if (!has(computedFunc)) {
        registered.push(computedFunc);
        if (computedFunc.computedRef) {
          cachedByRef[computedFunc.computedRef] = computedFunc;
        }
        computed.push(createMapper(computedFunc));
      }
      if (computedFunc.computedRef) {
        return computed[registered.indexOf(cachedByRef[computedFunc.computedRef])]();
      } else {
        return computed[registered.indexOf(computedFunc)]();
      }
    };
    return {
      register: function(computeFunc) {
        registered.push(computeFunc);
        if (computeFunc.computedRef) {
          cachedByRef[computeFunc.computedRef] = computeFunc;
        }
        computed.push(createMapper(computeFunc));
        return this.getComputedValue(computeFunc);
      },
      has: has,
      getComputedValue: getComputedValue
    };
  };
  return module.exports;
});

$__System.registerDynamic("65", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  function EventEmitter() {
    this._events = this._events || {};
    this._maxListeners = this._maxListeners || undefined;
  }
  module.exports = EventEmitter;
  EventEmitter.EventEmitter = EventEmitter;
  EventEmitter.prototype._events = undefined;
  EventEmitter.prototype._maxListeners = undefined;
  EventEmitter.defaultMaxListeners = 10;
  EventEmitter.prototype.setMaxListeners = function(n) {
    if (!isNumber(n) || n < 0 || isNaN(n))
      throw TypeError('n must be a positive number');
    this._maxListeners = n;
    return this;
  };
  EventEmitter.prototype.emit = function(type) {
    var er,
        handler,
        len,
        args,
        i,
        listeners;
    if (!this._events)
      this._events = {};
    if (type === 'error') {
      if (!this._events.error || (isObject(this._events.error) && !this._events.error.length)) {
        er = arguments[1];
        if (er instanceof Error) {
          throw er;
        }
        throw TypeError('Uncaught, unspecified "error" event.');
      }
    }
    handler = this._events[type];
    if (isUndefined(handler))
      return false;
    if (isFunction(handler)) {
      switch (arguments.length) {
        case 1:
          handler.call(this);
          break;
        case 2:
          handler.call(this, arguments[1]);
          break;
        case 3:
          handler.call(this, arguments[1], arguments[2]);
          break;
        default:
          args = Array.prototype.slice.call(arguments, 1);
          handler.apply(this, args);
      }
    } else if (isObject(handler)) {
      args = Array.prototype.slice.call(arguments, 1);
      listeners = handler.slice();
      len = listeners.length;
      for (i = 0; i < len; i++)
        listeners[i].apply(this, args);
    }
    return true;
  };
  EventEmitter.prototype.addListener = function(type, listener) {
    var m;
    if (!isFunction(listener))
      throw TypeError('listener must be a function');
    if (!this._events)
      this._events = {};
    if (this._events.newListener)
      this.emit('newListener', type, isFunction(listener.listener) ? listener.listener : listener);
    if (!this._events[type])
      this._events[type] = listener;
    else if (isObject(this._events[type]))
      this._events[type].push(listener);
    else
      this._events[type] = [this._events[type], listener];
    if (isObject(this._events[type]) && !this._events[type].warned) {
      if (!isUndefined(this._maxListeners)) {
        m = this._maxListeners;
      } else {
        m = EventEmitter.defaultMaxListeners;
      }
      if (m && m > 0 && this._events[type].length > m) {
        this._events[type].warned = true;
        console.error('(node) warning: possible EventEmitter memory ' + 'leak detected. %d listeners added. ' + 'Use emitter.setMaxListeners() to increase limit.', this._events[type].length);
        if (typeof console.trace === 'function') {
          console.trace();
        }
      }
    }
    return this;
  };
  EventEmitter.prototype.on = EventEmitter.prototype.addListener;
  EventEmitter.prototype.once = function(type, listener) {
    if (!isFunction(listener))
      throw TypeError('listener must be a function');
    var fired = false;
    function g() {
      this.removeListener(type, g);
      if (!fired) {
        fired = true;
        listener.apply(this, arguments);
      }
    }
    g.listener = listener;
    this.on(type, g);
    return this;
  };
  EventEmitter.prototype.removeListener = function(type, listener) {
    var list,
        position,
        length,
        i;
    if (!isFunction(listener))
      throw TypeError('listener must be a function');
    if (!this._events || !this._events[type])
      return this;
    list = this._events[type];
    length = list.length;
    position = -1;
    if (list === listener || (isFunction(list.listener) && list.listener === listener)) {
      delete this._events[type];
      if (this._events.removeListener)
        this.emit('removeListener', type, listener);
    } else if (isObject(list)) {
      for (i = length; i-- > 0; ) {
        if (list[i] === listener || (list[i].listener && list[i].listener === listener)) {
          position = i;
          break;
        }
      }
      if (position < 0)
        return this;
      if (list.length === 1) {
        list.length = 0;
        delete this._events[type];
      } else {
        list.splice(position, 1);
      }
      if (this._events.removeListener)
        this.emit('removeListener', type, listener);
    }
    return this;
  };
  EventEmitter.prototype.removeAllListeners = function(type) {
    var key,
        listeners;
    if (!this._events)
      return this;
    if (!this._events.removeListener) {
      if (arguments.length === 0)
        this._events = {};
      else if (this._events[type])
        delete this._events[type];
      return this;
    }
    if (arguments.length === 0) {
      for (key in this._events) {
        if (key === 'removeListener')
          continue;
        this.removeAllListeners(key);
      }
      this.removeAllListeners('removeListener');
      this._events = {};
      return this;
    }
    listeners = this._events[type];
    if (isFunction(listeners)) {
      this.removeListener(type, listeners);
    } else if (listeners) {
      while (listeners.length)
        this.removeListener(type, listeners[listeners.length - 1]);
    }
    delete this._events[type];
    return this;
  };
  EventEmitter.prototype.listeners = function(type) {
    var ret;
    if (!this._events || !this._events[type])
      ret = [];
    else if (isFunction(this._events[type]))
      ret = [this._events[type]];
    else
      ret = this._events[type].slice();
    return ret;
  };
  EventEmitter.prototype.listenerCount = function(type) {
    if (this._events) {
      var evlistener = this._events[type];
      if (isFunction(evlistener))
        return 1;
      else if (evlistener)
        return evlistener.length;
    }
    return 0;
  };
  EventEmitter.listenerCount = function(emitter, type) {
    return emitter.listenerCount(type);
  };
  function isFunction(arg) {
    return typeof arg === 'function';
  }
  function isNumber(arg) {
    return typeof arg === 'number';
  }
  function isObject(arg) {
    return typeof arg === 'object' && arg !== null;
  }
  function isUndefined(arg) {
    return arg === void 0;
  }
  return module.exports;
});

$__System.registerDynamic("5c", ["59"], true, function($__require, exports, module) {
  var process = $__require("59");
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(type, value) {
    var types = [String, Number, Array, Object, Boolean];
    if (type === null && value !== null) {
      return false;
    }
    if (type === undefined && value !== undefined) {
      return false;
    }
    if (type === String && typeof value !== 'string') {
      return false;
    }
    if (type === Number && typeof value !== 'number') {
      return false;
    }
    if (type === Array && !Array.isArray(value)) {
      return false;
    }
    if (type === Object && !(typeof value === 'object' && !Array.isArray(value) && value !== null)) {
      return false;
    }
    if (type === Boolean && typeof value !== 'boolean') {
      return false;
    }
    if (types.indexOf(type) === -1 && typeof type === 'function') {
      return type(value);
    }
    return true;
  };
  return module.exports;
});

$__System.registerDynamic("5b", ["5c", "59"], true, function($__require, exports, module) {
  var process = $__require("59");
  var define,
      global = this,
      GLOBAL = this;
  var types = $__require('5c');
  module.exports = {
    getFunctionName: function(fun) {
      var ret = fun.toString();
      ret = ret.substr('function '.length);
      ret = ret.substr(0, ret.indexOf('('));
      return ret;
    },
    merge: function(target, source) {
      source = source || {};
      return Object.keys(source).reduce(function(target, key) {
        target[key] = source[key];
        return target;
      }, target);
    },
    hasLocalStorage: function() {
      return typeof global.localStorage !== 'undefined';
    },
    isPathObject: function(obj) {
      return (obj && (obj.resolve || obj.reject));
    },
    debounce: function debounce(func, wait, immediate) {
      var timeout;
      return function() {
        var context = this;
        var args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate)
            func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow)
          func.apply(context, args);
      };
    },
    isAction: function(action) {
      return typeof action === 'function';
    },
    isDeveloping: function() {
      return typeof process === 'undefined' || "production" !== 'production';
    },
    verifyInput: function(actionName, signalName, input, signalArgs) {
      Object.keys(input).forEach(function(key) {
        if (typeof signalArgs[key] === 'undefined' || !types(input[key], signalArgs[key])) {
          throw new Error(['Cerebral: You are giving the wrong input to the action "' + actionName + '" ' + 'in signal "' + signalName + '". Check the following prop: "' + key + '"'].join(''));
        }
      });
    },
    extractMatchingPathFunctions: function(source, target) {
      var incompatible = false;
      var traverse = function(obj, currentTarget, path, results) {
        if (incompatible) {
          return incompatible;
        }
        if (typeof obj === 'function') {
          results[path.join('.')] = obj;
        } else if (typeof obj === 'object' && !Array.isArray(obj) && obj !== null) {
          for (var key in obj) {
            if (!(key in currentTarget)) {
              incompatible = path.slice().concat(key);
              return incompatible;
            } else {
              path.push(key);
              traverse(obj[key], currentTarget[key], path, results);
              path.pop(key);
            }
          }
        }
        return incompatible || results;
      };
      return traverse(source, target, [], {});
    },
    setDeep: function(object, stringPath, value) {
      var path = stringPath.split('.');
      var setKey = path.pop();
      while (path.length) {
        var key = path.shift();
        object = object[key] = object[key] || {};
      }
      object[setKey] = object[setKey] ? Object.keys(object[setKey]).reduce(function(value, key) {
        value[key] = object[setKey][key];
        return value;
      }, value) : value;
      return value;
    }
  };
  return module.exports;
});

$__System.registerDynamic("66", ["5b", "59"], true, function($__require, exports, module) {
  var process = $__require("59");
  var define,
      global = this,
      GLOBAL = this;
  var utils = $__require('5b');
  module.exports = function Recorder() {
    return function(module, controller) {
      var signalMethods = controller.getSignals();
      var currentSignal = null;
      var currentSeek = 0;
      var currentRecording = null;
      var durationTimer = null;
      var playbackTimers = [];
      var duration = 0;
      var started = null;
      var ended = null;
      var isPlaying = false;
      var isRecording = false;
      var isCatchingUp = false;
      var startSeek = 0;
      var catchup = null;
      var triggerSignal = function(signal) {
        var signalName = signal.name.split('.');
        var signalMethodPath = signalMethods;
        while (signalName.length) {
          signalMethodPath = signalMethodPath[signalName.shift()];
        }
        currentSignal = signal;
        signalMethodPath(signal.input, {
          isRecorded: !isCatchingUp,
          branches: isCatchingUp && signal.branches
        });
      };
      var services = {
        seek: function(seek) {
          startSeek = seek;
          clearTimeout(durationTimer);
          playbackTimers.forEach(clearTimeout);
          controller.emit('seek', startSeek, currentRecording);
          catchup = currentRecording.signals.filter(function(signal) {
            return signal.start - currentRecording.start < startSeek;
          });
          isCatchingUp = true;
          catchup.forEach(triggerSignal);
          isCatchingUp = false;
        },
        getCurrentSignal: function() {
          return currentSignal;
        },
        createTimer: function() {
          var update = function() {
            duration += 500;
            controller.emit('duration', duration);
            if (duration < currentRecording.duration) {
              durationTimer = setTimeout(update, 500);
              controller.emit('change');
            }
          };
          durationTimer = setTimeout(update, 500);
        },
        resetState: function() {
          controller.emit('recorderReset', currentRecording);
        },
        play: function() {
          if (isPlaying || isRecording) {
            throw new Error('CEREBRAL Recorder - You can not play while already playing or recording');
          }
          this.createTimer();
          var signalsCount = currentRecording.signals.length;
          var startIndex = catchup.length;
          for (var x = startIndex; x < signalsCount; x++) {
            var signal = currentRecording.signals[x];
            var durationTarget = signal.start - currentRecording.start - startSeek;
            playbackTimers.push(setTimeout(triggerSignal.bind(null, signal), durationTarget));
          }
          isPlaying = true;
          started = Date.now();
        },
        record: function(options) {
          options = options || {};
          if (currentRecording) {
            this.resetState();
          }
          var paths = options.paths || [[]];
          var state = paths.map(function(path) {
            return {
              path: path,
              value: controller.get(path)
            };
          });
          currentRecording = {
            initialState: state,
            start: Date.now(),
            signals: []
          };
          isRecording = true;
        },
        stop: function() {
          var wasPlaying = isPlaying;
          clearTimeout(durationTimer);
          isPlaying = false;
          isRecording = false;
          if (wasPlaying) {
            return;
          }
          currentRecording.end = Date.now();
          currentRecording.duration = currentRecording.end - currentRecording.start;
        },
        pause: function pause() {
          ended = Date.now();
          currentSeek = ended - started;
          clearTimeout(durationTimer);
          playbackTimers.forEach(clearTimeout);
          isPlaying = false;
        },
        addSignal: function(signal) {
          currentRecording.signals.push(signal);
        },
        isRecording: function() {
          return isRecording;
        },
        isPlaying: function() {
          return isPlaying;
        },
        isCatchingUp: function() {
          return isCatchingUp;
        },
        getRecording: function() {
          return currentRecording;
        },
        getCurrentSeek: function() {
          return currentSeek;
        },
        loadRecording: function(recording) {
          currentRecording = recording;
        }
      };
      controller.getRecorder = function getRecorder() {
        console.warn('Cerebral: controller.getRecorder() is deprecated. Please upgrade recorder module.');
        return services;
      };
      controller.on('signalTrigger', function(args) {
        var signal = args.signal;
        if (isPlaying && !signal.options.isRecorded) {
          signal.preventSignalRun();
          if (utils.isDeveloping())
            console.warn('Cerebral - Recording is replaying, ignored signal ' + signal.name);
        }
      });
      controller.on('signalStart', function(args) {
        if (isRecording)
          services.addSignal(args.signal);
      });
    };
  };
  return module.exports;
});

$__System.registerDynamic("@system-env", [], false, function() {
  return {
    "production": true,
    "browser": true,
    "node": false
  };
});

$__System.registerDynamic("59", ["@system-env"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var productionEnv = $__require('@system-env').production;
  var process = module.exports = {};
  var queue = [];
  var draining = false;
  var currentQueue;
  var queueIndex = -1;
  function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
      queue = currentQueue.concat(queue);
    } else {
      queueIndex = -1;
    }
    if (queue.length) {
      drainQueue();
    }
  }
  function drainQueue() {
    if (draining) {
      return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while (len) {
      currentQueue = queue;
      queue = [];
      while (++queueIndex < len) {
        if (currentQueue) {
          currentQueue[queueIndex].run();
        }
      }
      queueIndex = -1;
      len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
  }
  process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
      for (var i = 1; i < arguments.length; i++) {
        args[i - 1] = arguments[i];
      }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
      setTimeout(drainQueue, 0);
    }
  };
  function Item(fun, array) {
    this.fun = fun;
    this.array = array;
  }
  Item.prototype.run = function() {
    this.fun.apply(null, this.array);
  };
  process.title = 'browser';
  process.browser = true;
  process.env = {NODE_ENV: productionEnv ? 'production' : 'development'};
  process.argv = [];
  process.version = '';
  process.versions = {};
  function noop() {}
  process.on = noop;
  process.addListener = noop;
  process.once = noop;
  process.off = noop;
  process.removeListener = noop;
  process.removeAllListeners = noop;
  process.emit = noop;
  process.binding = function(name) {
    throw new Error('process.binding is not supported');
  };
  process.cwd = function() {
    return '/';
  };
  process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
  };
  process.umask = function() {
    return 0;
  };
  return module.exports;
});

$__System.registerDynamic("67", ["57", "60", "63", "64", "65", "66", "59"], true, function($__require, exports, module) {
  var process = $__require("59");
  var define,
      global = this,
      GLOBAL = this;
  var get = $__require('57');
  var CreateSignalFactory = $__require('60');
  var CreateRegisterModules = $__require('63');
  var Compute = $__require('64');
  var EventEmitter = $__require('65').EventEmitter;
  var Recorder = $__require('66');
  var Controller = function(Model, services) {
    if (services) {
      console.warn('Passing services to controller is DEPRECATED. Please add them to controller with controller.addServices({})');
    }
    var controller = new EventEmitter();
    var model = Model(controller);
    var compute = Compute(model);
    var signals = {};
    var modules = {};
    services = services || {};
    var signalFactory = CreateSignalFactory(controller, model, services, compute, modules);
    var signal = function() {
      var signalNamePath = arguments[0].split('.');
      var signalName = signalNamePath.pop();
      var signalMethodPath = signals;
      while (signalNamePath.length) {
        var pathName = signalNamePath.shift();
        signalMethodPath = signalMethodPath[pathName] = signalMethodPath[pathName] || {};
      }
      var signal = signalMethodPath[signalName] = signalFactory.apply(null, arguments);
      return signal;
    };
    var service = function(name, service) {
      var serviceNamePath = name.split('.');
      var serviceName = serviceNamePath.pop();
      var serviceMethodPath = services;
      while (serviceNamePath.length) {
        var pathName = serviceNamePath.shift();
        serviceMethodPath = serviceMethodPath[pathName] = serviceMethodPath[pathName] || {};
      }
      serviceMethodPath[serviceName] = service;
      return service;
    };
    controller.signal = function() {
      console.warn('Cerebral: controller.signal() is DEPRECATED. Please use controller.addSignals() instead');
      signal.apply(null, arguments);
    };
    controller.signalSync = function() {
      console.warn('Cerebral: controller.signalSync() is DEPRECATED. Please use controller.addSignals({mySignal: {chain: [], sync: true}}) instead');
      var defaultOptions = arguments[2] || {};
      defaultOptions.isSync = true;
      return signal(arguments[0], arguments[1], defaultOptions);
    };
    controller.getSignals = function(path) {
      return path ? get(signals, path) : signals;
    };
    controller.getServices = function(path) {
      return path ? get(services, path) : services;
    };
    controller.get = function() {
      if (typeof arguments[0] === 'function') {
        return compute.has(arguments[0]) ? compute.getComputedValue(arguments[0]) : compute.register(arguments[0]);
      }
      var path = !arguments.length ? [] : typeof arguments[0] === 'string' ? [].slice.call(arguments) : arguments[0];
      return model.accessors.get(path);
    };
    controller.logModel = function() {
      return model.logModel();
    };
    controller.getModules = function(moduleName) {
      return moduleName ? modules[moduleName] : modules;
    };
    controller.addModules = CreateRegisterModules(controller, model, modules);
    controller.modules = function() {
      console.warn('Cerebral: controller.modules() is DEPRECATED. Please use controller.addModules() instead');
      controller.addModules.apply(controller, arguments);
    };
    controller.addSignals = function(signals, options) {
      Object.keys(signals).forEach(function(name) {
        if (signals[name].chain) {
          var optionsCopy = Object.keys(options || {}).reduce(function(optionsCopy, key) {
            optionsCopy[key] = options[key];
            return optionsCopy;
          }, {});
          var signalOptions = Object.keys(signals[name]).reduce(function(signalOptions, key) {
            if (key !== 'chain') {
              signalOptions[key] = signals[name][key];
            }
            return signalOptions;
          }, optionsCopy);
          if (signalOptions.hasOwnProperty('sync')) {
            console.warn('Cerebral: sync signal option is DEPRECATED. Please use immediate option instead.');
            signalOptions.isSync = signalOptions.sync;
          }
          signal(name, signals[name].chain, signalOptions);
        } else {
          signal(name, signals[name], options);
        }
      });
    };
    controller.signals = function() {
      console.warn('Cerebral: controller.signals() is DEPRECATED. Please use controller.addSignals() instead');
      controller.addSignals.apply(controller, arguments);
    };
    controller.signalsSync = function(signals, options) {
      console.warn('Cerebral: controller.signalsSync() is DEPRECATED. Please use controller.addSignals({mySignal: {chain: [], sync: true}}) instead');
      Object.keys(signals).forEach(function(key) {
        options = options || {};
        options.isSync = true;
        signal(key, signals[key], options);
      });
    };
    controller.addServices = function(newServices) {
      Object.keys(newServices).forEach(function(key) {
        service(key, newServices[key]);
      });
      return controller.getServices();
    };
    controller.services = function(newServices) {
      console.warn('Cerebral: controller.services() is DEPRECATED. Please use controller.addServices() instead');
      controller.addServices(newServices);
    };
    Recorder()({}, controller);
    return controller;
  };
  Controller.ServerController = function(state) {
    var model = {accessors: {get: function(path) {
          path = path.slice();
          var key = path.pop();
          var grabbedState = state;
          while (path.length) {
            grabbedState = grabbedState[path.shift()];
          }
          return grabbedState[key];
        }}};
    var compute = Compute(model);
    return {
      isServer: true,
      get: function(path) {
        if (typeof arguments[0] === 'function') {
          return compute.has(arguments[0]) ? compute.getComputedValue(arguments[0]) : compute.register(arguments[0]);
        }
        path = !arguments.length ? [] : typeof arguments[0] === 'string' ? [].slice.call(arguments) : arguments[0];
        return model.accessors.get(path);
      }
    };
  };
  module.exports = Controller;
  return module.exports;
});

$__System.registerDynamic("68", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function() {
    'use strict';
    var __allowedOptions = {
      once: 'boolean',
      scope: 'object'
    };
    var __order = 0;
    function shallowMerge(o1, o2) {
      var o = {},
          k;
      for (k in o1)
        o[k] = o1[k];
      for (k in o2)
        o[k] = o2[k];
      return o;
    }
    function isPlainObject(v) {
      return v && typeof v === 'object' && !Array.isArray(v) && !(v instanceof Function) && !(v instanceof RegExp);
    }
    function forIn(object, fn, scope) {
      var symbols,
          k,
          i,
          l;
      for (k in object)
        fn.call(scope || null, k, object[k]);
      if (Object.getOwnPropertySymbols) {
        symbols = Object.getOwnPropertySymbols(object);
        for (i = 0, l = symbols.length; i < l; i++)
          fn.call(scope || null, symbols[i], object[symbols[i]]);
      }
    }
    var Emitter = function() {
      this._enabled = true;
      this.unbindAll();
    };
    Emitter.prototype.unbindAll = function() {
      this._handlers = {};
      this._handlersAll = [];
      this._handlersComplex = [];
      return this;
    };
    Emitter.prototype.on = function(a, b, c) {
      var i,
          l,
          k,
          event,
          eArray,
          handlersList,
          bindingObject;
      if (isPlainObject(a)) {
        forIn(a, function(name, fn) {
          this.on(name, fn, b);
        }, this);
        return this;
      }
      if (typeof a === 'function') {
        c = b;
        b = a;
        a = null;
      }
      eArray = [].concat(a);
      for (i = 0, l = eArray.length; i < l; i++) {
        event = eArray[i];
        bindingObject = {
          order: __order++,
          fn: b
        };
        if (typeof event === 'string' || typeof event === 'symbol') {
          if (!this._handlers[event])
            this._handlers[event] = [];
          handlersList = this._handlers[event];
          bindingObject.type = event;
        } else if (event instanceof RegExp) {
          handlersList = this._handlersComplex;
          bindingObject.pattern = event;
        } else if (event === null) {
          handlersList = this._handlersAll;
        } else {
          throw Error('Emitter.on: invalid event.');
        }
        for (k in c || {})
          if (__allowedOptions[k])
            bindingObject[k] = c[k];
        handlersList.push(bindingObject);
      }
      return this;
    };
    Emitter.prototype.once = function() {
      var args = Array.prototype.slice.call(arguments),
          li = args.length - 1;
      if (isPlainObject(args[li]) && args.length > 1)
        args[li] = shallowMerge(args[li], {once: true});
      else
        args.push({once: true});
      return this.on.apply(this, args);
    };
    function filter(target, fn) {
      target = target || [];
      var a = [],
          l,
          i;
      for (i = 0, l = target.length; i < l; i++)
        if (target[i].fn !== fn)
          a.push(target[i]);
      return a;
    }
    Emitter.prototype.off = function(events, fn) {
      var i,
          n,
          k,
          event;
      if (arguments.length === 1 && typeof events === 'function') {
        fn = arguments[0];
        for (k in this._handlers) {
          this._handlers[k] = filter(this._handlers[k], fn);
          if (this._handlers[k].length === 0)
            delete this._handlers[k];
        }
        this._handlersAll = filter(this._handlersAll, fn);
        this._handlersComplex = filter(this._handlersComplex, fn);
      } else if (arguments.length === 1 && (typeof events === 'string' || typeof events === 'symbol')) {
        delete this._handlers[events];
      } else if (arguments.length === 2) {
        var eArray = [].concat(events);
        for (i = 0, n = eArray.length; i < n; i++) {
          event = eArray[i];
          this._handlers[event] = filter(this._handlers[event], fn);
          if ((this._handlers[event] || []).length === 0)
            delete this._handlers[event];
        }
      } else if (isPlainObject(events)) {
        forIn(events, this.off, this);
      }
      return this;
    };
    Emitter.prototype.listeners = function(event) {
      var handlers = this._handlersAll || [],
          complex = false,
          h,
          i,
          l;
      if (!event)
        throw Error('Emitter.listeners: no event provided.');
      handlers = handlers.concat(this._handlers[event] || []);
      for (i = 0, l = this._handlersComplex.length; i < l; i++) {
        h = this._handlersComplex[i];
        if (~event.search(h.pattern)) {
          complex = true;
          handlers.push(h);
        }
      }
      if (this._handlersAll.length || complex)
        return handlers.sort(function(a, b) {
          return a.order - b.order;
        });
      else
        return handlers.slice(0);
    };
    Emitter.prototype.emit = function(events, data) {
      if (!this._enabled)
        return this;
      if (isPlainObject(events)) {
        forIn(events, this.emit, this);
        return this;
      }
      var eArray = [].concat(events),
          onces = [],
          event,
          parent,
          handlers,
          handler,
          i,
          j,
          l,
          m;
      for (i = 0, l = eArray.length; i < l; i++) {
        handlers = this.listeners(eArray[i]);
        for (j = 0, m = handlers.length; j < m; j++) {
          handler = handlers[j];
          event = {
            type: eArray[i],
            target: this
          };
          if (arguments.length > 1)
            event.data = data;
          handler.fn.call('scope' in handler ? handler.scope : this, event);
          if (handler.once)
            onces.push(handler);
        }
        for (j = onces.length - 1; j >= 0; j--) {
          parent = onces[j].type ? this._handlers[onces[j].type] : onces[j].pattern ? this._handlersComplex : this._handlersAll;
          parent.splice(parent.indexOf(onces[j]), 1);
        }
      }
      return this;
    };
    Emitter.prototype.kill = function() {
      this.unbindAll();
      this._handlers = null;
      this._handlersAll = null;
      this._handlersComplex = null;
      this._enabled = false;
      this.unbindAll = this.on = this.once = this.off = this.emit = this.listeners = Function.prototype;
    };
    Emitter.prototype.disable = function() {
      this._enabled = false;
      return this;
    };
    Emitter.prototype.enable = function() {
      this._enabled = true;
      return this;
    };
    Emitter.version = '3.1.1';
    if (typeof exports !== 'undefined') {
      if (typeof module !== 'undefined' && module.exports)
        exports = module.exports = Emitter;
      exports.Emitter = Emitter;
    } else if (typeof define === 'function' && define.amd)
      define('emmett', [], function() {
        return Emitter;
      });
    else
      this.Emitter = Emitter;
  }).call(this);
  return module.exports;
});

$__System.registerDynamic("69", ["68", "6a", "6b", "6c"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  Object.defineProperty(exports, '__esModule', {value: true});
  var _createClass = (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ('value' in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps)
        defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })();
  var _get = function get(_x3, _x4, _x5) {
    var _again = true;
    _function: while (_again) {
      var object = _x3,
          property = _x4,
          receiver = _x5;
      _again = false;
      if (object === null)
        object = Function.prototype;
      var desc = Object.getOwnPropertyDescriptor(object, property);
      if (desc === undefined) {
        var parent = Object.getPrototypeOf(object);
        if (parent === null) {
          return undefined;
        } else {
          _x3 = parent;
          _x4 = property;
          _x5 = receiver;
          _again = true;
          desc = parent = undefined;
          continue _function;
        }
      } else if ('value' in desc) {
        return desc.value;
      } else {
        var getter = desc.get;
        if (getter === undefined) {
          return undefined;
        }
        return getter.call(receiver);
      }
    }
  };
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {'default': obj};
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function');
    }
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== 'function' && superClass !== null) {
      throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }});
    if (superClass)
      Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
  var _emmett = $__require('68');
  var _emmett2 = _interopRequireDefault(_emmett);
  var _monkey = $__require('6a');
  var _type = $__require('6b');
  var _type2 = _interopRequireDefault(_type);
  var _helpers = $__require('6c');
  function checkPossibilityOfDynamicTraversal(method, solvedPath) {
    if (!solvedPath)
      throw (0, _helpers.makeError)('Baobab.Cursor.' + method + ': ' + ('cannot use ' + method + ' on an unresolved dynamic path.'), {path: solvedPath});
  }
  var Cursor = (function(_Emitter) {
    _inherits(Cursor, _Emitter);
    function Cursor(tree, path, hash) {
      var _this = this;
      _classCallCheck(this, Cursor);
      _get(Object.getPrototypeOf(Cursor.prototype), 'constructor', this).call(this);
      path = path || [];
      this._identity = '[object Cursor]';
      this._archive = null;
      this.tree = tree;
      this.path = path;
      this.hash = hash;
      this.state = {
        killed: false,
        recording: false,
        undoing: false
      };
      this._dynamicPath = _type2['default'].dynamicPath(this.path);
      this._monkeyPath = _type2['default'].monkeyPath(this.tree._monkeys, this.path);
      if (!this._dynamicPath)
        this.solvedPath = this.path;
      else
        this.solvedPath = (0, _helpers.getIn)(this.tree._data, this.path).solvedPath;
      this._writeHandler = function(_ref) {
        var data = _ref.data;
        if (_this.state.killed || !(0, _helpers.solveUpdate)([data.path], _this._getComparedPaths()))
          return;
        _this.solvedPath = (0, _helpers.getIn)(_this.tree._data, _this.path).solvedPath;
      };
      var fireUpdate = function fireUpdate(previousData) {
        var self = _this;
        var eventData = Object.defineProperties({}, {
          previousData: {
            get: function get() {
              return (0, _helpers.getIn)(previousData, self.solvedPath).data;
            },
            configurable: true,
            enumerable: true
          },
          currentData: {
            get: function get() {
              return self.get();
            },
            configurable: true,
            enumerable: true
          }
        });
        if (_this.state.recording && !_this.state.undoing)
          _this.archive.add(eventData.previousData);
        _this.state.undoing = false;
        return _this.emit('update', eventData);
      };
      this._updateHandler = function(event) {
        if (_this.state.killed)
          return;
        var _event$data = event.data;
        var paths = _event$data.paths;
        var previousData = _event$data.previousData;
        var update = fireUpdate.bind(_this, previousData);
        var comparedPaths = _this._getComparedPaths();
        if ((0, _helpers.solveUpdate)(paths, comparedPaths))
          return update();
      };
      var bound = false;
      this._lazyBind = function() {
        if (bound)
          return;
        bound = true;
        if (_this._dynamicPath)
          _this.tree.on('write', _this._writeHandler);
        return _this.tree.on('update', _this._updateHandler);
      };
      if (this._dynamicPath) {
        this._lazyBind();
      } else {
        this.on = (0, _helpers.before)(this._lazyBind, this.on.bind(this));
        this.once = (0, _helpers.before)(this._lazyBind, this.once.bind(this));
      }
    }
    _createClass(Cursor, [{
      key: '_getComparedPaths',
      value: function _getComparedPaths() {
        var additionalPaths = this._monkeyPath ? (0, _helpers.getIn)(this.tree._monkeys, this._monkeyPath).data.relatedPaths() : [];
        return [this.solvedPath].concat(additionalPaths);
      }
    }, {
      key: 'isRoot',
      value: function isRoot() {
        return !this.path.length;
      }
    }, {
      key: 'isLeaf',
      value: function isLeaf() {
        return _type2['default'].primitive(this._get().data);
      }
    }, {
      key: 'isBranch',
      value: function isBranch() {
        return !this.isRoot() && !this.isLeaf();
      }
    }, {
      key: 'root',
      value: function root() {
        return this.tree.select();
      }
    }, {
      key: 'select',
      value: function select(path) {
        if (arguments.length > 1)
          path = (0, _helpers.arrayFrom)(arguments);
        return this.tree.select(this.path.concat(path));
      }
    }, {
      key: 'up',
      value: function up() {
        if (!this.isRoot())
          return this.tree.select(this.path.slice(0, -1));
        return null;
      }
    }, {
      key: 'down',
      value: function down() {
        checkPossibilityOfDynamicTraversal('down', this.solvedPath);
        if (!(this._get().data instanceof Array))
          throw Error('Baobab.Cursor.down: cannot go down on a non-list type.');
        return this.tree.select(this.solvedPath.concat(0));
      }
    }, {
      key: 'left',
      value: function left() {
        checkPossibilityOfDynamicTraversal('left', this.solvedPath);
        var last = +this.solvedPath[this.solvedPath.length - 1];
        if (isNaN(last))
          throw Error('Baobab.Cursor.left: cannot go left on a non-list type.');
        return last ? this.tree.select(this.solvedPath.slice(0, -1).concat(last - 1)) : null;
      }
    }, {
      key: 'right',
      value: function right() {
        checkPossibilityOfDynamicTraversal('right', this.solvedPath);
        var last = +this.solvedPath[this.solvedPath.length - 1];
        if (isNaN(last))
          throw Error('Baobab.Cursor.right: cannot go right on a non-list type.');
        if (last + 1 === this.up()._get().data.length)
          return null;
        return this.tree.select(this.solvedPath.slice(0, -1).concat(last + 1));
      }
    }, {
      key: 'leftmost',
      value: function leftmost() {
        checkPossibilityOfDynamicTraversal('leftmost', this.solvedPath);
        var last = +this.solvedPath[this.solvedPath.length - 1];
        if (isNaN(last))
          throw Error('Baobab.Cursor.leftmost: cannot go left on a non-list type.');
        return this.tree.select(this.solvedPath.slice(0, -1).concat(0));
      }
    }, {
      key: 'rightmost',
      value: function rightmost() {
        checkPossibilityOfDynamicTraversal('rightmost', this.solvedPath);
        var last = +this.solvedPath[this.solvedPath.length - 1];
        if (isNaN(last))
          throw Error('Baobab.Cursor.rightmost: cannot go right on a non-list type.');
        var list = this.up()._get().data;
        return this.tree.select(this.solvedPath.slice(0, -1).concat(list.length - 1));
      }
    }, {
      key: 'map',
      value: function map(fn, scope) {
        checkPossibilityOfDynamicTraversal('map', this.solvedPath);
        var array = this._get().data,
            l = arguments.length;
        if (!_type2['default'].array(array))
          throw Error('baobab.Cursor.map: cannot map a non-list type.');
        return array.map(function(item, i) {
          return fn.call(l > 1 ? scope : this, this.select(i), i, array);
        }, this);
      }
    }, {
      key: '_get',
      value: function _get() {
        var path = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
        if (!_type2['default'].path(path))
          throw (0, _helpers.makeError)('Baobab.Cursor.getters: invalid path.', {path: path});
        if (!this.solvedPath)
          return {
            data: undefined,
            solvedPath: null,
            exists: false
          };
        return (0, _helpers.getIn)(this.tree._data, this.solvedPath.concat(path));
      }
    }, {
      key: 'exists',
      value: function exists(path) {
        path = (0, _helpers.coercePath)(path);
        if (arguments.length > 1)
          path = (0, _helpers.arrayFrom)(arguments);
        return this._get(path).exists;
      }
    }, {
      key: 'get',
      value: function get(path) {
        path = (0, _helpers.coercePath)(path);
        if (arguments.length > 1)
          path = (0, _helpers.arrayFrom)(arguments);
        var _get2 = this._get(path);
        var data = _get2.data;
        var solvedPath = _get2.solvedPath;
        this.tree.emit('get', {
          data: data,
          solvedPath: solvedPath,
          path: this.path.concat(path)
        });
        return data;
      }
    }, {
      key: 'clone',
      value: function clone() {
        var data = this.get.apply(this, arguments);
        return (0, _helpers.shallowClone)(data);
      }
    }, {
      key: 'deepClone',
      value: function deepClone() {
        var data = this.get.apply(this, arguments);
        return (0, _helpers.deepClone)(data);
      }
    }, {
      key: 'serialize',
      value: function serialize(path) {
        path = (0, _helpers.coercePath)(path);
        if (arguments.length > 1)
          path = (0, _helpers.arrayFrom)(arguments);
        if (!_type2['default'].path(path))
          throw (0, _helpers.makeError)('Baobab.Cursor.getters: invalid path.', {path: path});
        if (!this.solvedPath)
          return undefined;
        var fullPath = this.solvedPath.concat(path);
        var data = (0, _helpers.deepClone)((0, _helpers.getIn)(this.tree._data, fullPath).data),
            monkeys = (0, _helpers.getIn)(this.tree._monkeys, fullPath).data;
        var dropComputedData = function dropComputedData(d, m) {
          if (!_type2['default'].object(m) || !_type2['default'].object(d))
            return;
          for (var k in m) {
            if (m[k] instanceof _monkey.Monkey)
              delete d[k];
            else
              dropComputedData(d[k], m[k]);
          }
        };
        dropComputedData(data, monkeys);
        return data;
      }
    }, {
      key: 'project',
      value: function project(projection) {
        if (_type2['default'].object(projection)) {
          var data = {};
          for (var k in projection) {
            data[k] = this.get(projection[k]);
          }
          return data;
        } else if (_type2['default'].array(projection)) {
          var data = [];
          for (var i = 0,
              l = projection.length; i < l; i++) {
            data.push(this.get(projection[i]));
          }
          return data;
        }
        throw (0, _helpers.makeError)('Baobab.Cursor.project: wrong projection.', {projection: projection});
      }
    }, {
      key: 'startRecording',
      value: function startRecording(maxRecords) {
        maxRecords = maxRecords || Infinity;
        if (maxRecords < 1)
          throw (0, _helpers.makeError)('Baobab.Cursor.startRecording: invalid max records.', {value: maxRecords});
        this.state.recording = true;
        if (this.archive)
          return this;
        this._lazyBind();
        this.archive = new _helpers.Archive(maxRecords);
        return this;
      }
    }, {
      key: 'stopRecording',
      value: function stopRecording() {
        this.state.recording = false;
        return this;
      }
    }, {
      key: 'undo',
      value: function undo() {
        var steps = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];
        if (!this.state.recording)
          throw new Error('Baobab.Cursor.undo: cursor is not recording.');
        var record = this.archive.back(steps);
        if (!record)
          throw Error('Baobab.Cursor.undo: cannot find a relevant record.');
        this.state.undoing = true;
        this.set(record);
        return this;
      }
    }, {
      key: 'hasHistory',
      value: function hasHistory() {
        return !!(this.archive && this.archive.get().length);
      }
    }, {
      key: 'getHistory',
      value: function getHistory() {
        return this.archive ? this.archive.get() : [];
      }
    }, {
      key: 'clearHistory',
      value: function clearHistory() {
        if (this.archive)
          this.archive.clear();
        return this;
      }
    }, {
      key: 'release',
      value: function release() {
        if (this._dynamicPath)
          this.tree.off('write', this._writeHandler);
        this.tree.off('update', this._updateHandler);
        if (this.hash)
          delete this.tree._cursors[this.hash];
        delete this.tree;
        delete this.path;
        delete this.solvedPath;
        delete this.archive;
        this.kill();
        this.state.killed = true;
      }
    }, {
      key: 'toJSON',
      value: function toJSON() {
        return this.serialize();
      }
    }, {
      key: 'toString',
      value: function toString() {
        return this._identity;
      }
    }]);
    return Cursor;
  })(_emmett2['default']);
  exports['default'] = Cursor;
  if (typeof Symbol === 'function' && typeof Symbol.iterator !== 'undefined') {
    Cursor.prototype[Symbol.iterator] = function() {
      var array = this._get().data;
      if (!_type2['default'].array(array))
        throw Error('baobab.Cursor.@@iterate: cannot iterate a non-list type.');
      var i = 0;
      var cursor = this,
          length = array.length;
      return {next: function next() {
          if (i < length) {
            return {value: cursor.select(i++)};
          }
          return {done: true};
        }};
    };
  }
  var INTRANSITIVE_SETTERS = {
    unset: true,
    pop: true,
    shift: true
  };
  function makeSetter(name, typeChecker) {
    Cursor.prototype[name] = function(path, value) {
      if (arguments.length > 2)
        throw (0, _helpers.makeError)('Baobab.Cursor.' + name + ': too many arguments.');
      if (arguments.length === 1 && !INTRANSITIVE_SETTERS[name]) {
        value = path;
        path = [];
      }
      path = (0, _helpers.coercePath)(path);
      if (!_type2['default'].path(path))
        throw (0, _helpers.makeError)('Baobab.Cursor.' + name + ': invalid path.', {path: path});
      if (typeChecker && !typeChecker(value))
        throw (0, _helpers.makeError)('Baobab.Cursor.' + name + ': invalid value.', {
          path: path,
          value: value
        });
      if (!this.solvedPath)
        throw (0, _helpers.makeError)('Baobab.Cursor.' + name + ': the dynamic path of the cursor cannot be solved.', {path: this.path});
      var fullPath = this.solvedPath.concat(path);
      return this.tree.update(fullPath, {
        type: name,
        value: value
      });
    };
  }
  makeSetter('set');
  makeSetter('unset');
  makeSetter('apply', _type2['default']['function']);
  makeSetter('push');
  makeSetter('concat', _type2['default'].array);
  makeSetter('unshift');
  makeSetter('pop');
  makeSetter('shift');
  makeSetter('splice', _type2['default'].splicer);
  makeSetter('merge', _type2['default'].object);
  makeSetter('deepMerge', _type2['default'].object);
  module.exports = exports['default'];
  return module.exports;
});

$__System.registerDynamic("6d", ["68", "69", "6b", "6c"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  Object.defineProperty(exports, '__esModule', {value: true});
  var _createClass = (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ('value' in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps)
        defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })();
  var _get = function get(_x, _x2, _x3) {
    var _again = true;
    _function: while (_again) {
      var object = _x,
          property = _x2,
          receiver = _x3;
      _again = false;
      if (object === null)
        object = Function.prototype;
      var desc = Object.getOwnPropertyDescriptor(object, property);
      if (desc === undefined) {
        var parent = Object.getPrototypeOf(object);
        if (parent === null) {
          return undefined;
        } else {
          _x = parent;
          _x2 = property;
          _x3 = receiver;
          _again = true;
          desc = parent = undefined;
          continue _function;
        }
      } else if ('value' in desc) {
        return desc.value;
      } else {
        var getter = desc.get;
        if (getter === undefined) {
          return undefined;
        }
        return getter.call(receiver);
      }
    }
  };
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {'default': obj};
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function');
    }
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== 'function' && superClass !== null) {
      throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }});
    if (superClass)
      Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
  var _emmett = $__require('68');
  var _emmett2 = _interopRequireDefault(_emmett);
  var _cursor = $__require('69');
  var _cursor2 = _interopRequireDefault(_cursor);
  var _type = $__require('6b');
  var _type2 = _interopRequireDefault(_type);
  var _helpers = $__require('6c');
  var Watcher = (function(_Emitter) {
    _inherits(Watcher, _Emitter);
    function Watcher(tree, mapping) {
      var _this = this;
      _classCallCheck(this, Watcher);
      _get(Object.getPrototypeOf(Watcher.prototype), 'constructor', this).call(this);
      this.tree = tree;
      this.mapping = null;
      this.state = {killed: false};
      this.refresh(mapping);
      this.handler = function(e) {
        if (_this.state.killed)
          return;
        var watchedPaths = _this.getWatchedPaths();
        if ((0, _helpers.solveUpdate)(e.data.paths, watchedPaths))
          return _this.emit('update');
      };
      this.tree.on('update', this.handler);
    }
    _createClass(Watcher, [{
      key: 'getWatchedPaths',
      value: function getWatchedPaths() {
        var _this2 = this;
        var rawPaths = Object.keys(this.mapping).map(function(k) {
          var v = _this2.mapping[k];
          if (v instanceof _cursor2['default'])
            return v.solvedPath;
          return _this2.mapping[k];
        });
        return rawPaths.reduce(function(cp, p) {
          p = [].concat(p);
          if (_type2['default'].dynamicPath(p))
            p = (0, _helpers.getIn)(_this2.tree._data, p).solvedPath;
          if (!p)
            return cp;
          var monkeyPath = _type2['default'].monkeyPath(_this2.tree._monkeys, p);
          if (monkeyPath)
            return cp.concat((0, _helpers.getIn)(_this2.tree._monkeys, monkeyPath).data.relatedPaths());
          return cp.concat([p]);
        }, []);
      }
    }, {
      key: 'getCursors',
      value: function getCursors() {
        var _this3 = this;
        var cursors = {};
        Object.keys(this.mapping).forEach(function(k) {
          var path = _this3.mapping[k];
          if (path instanceof _cursor2['default'])
            cursors[k] = path;
          else
            cursors[k] = _this3.tree.select(path);
        });
        return cursors;
      }
    }, {
      key: 'refresh',
      value: function refresh(mapping) {
        if (!_type2['default'].watcherMapping(mapping))
          throw (0, _helpers.makeError)('Baobab.watch: invalid mapping.', {mapping: mapping});
        this.mapping = mapping;
        var projection = {};
        for (var k in mapping) {
          projection[k] = mapping[k] instanceof _cursor2['default'] ? mapping[k].path : mapping[k];
        }
        this.get = this.tree.project.bind(this.tree, projection);
      }
    }, {
      key: 'release',
      value: function release() {
        this.tree.off('update', this.handler);
        this.state.killed = true;
        this.kill();
      }
    }]);
    return Watcher;
  })(_emmett2['default']);
  exports['default'] = Watcher;
  module.exports = exports['default'];
  return module.exports;
});

$__System.registerDynamic("6e", ["6b", "6c"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  Object.defineProperty(exports, '__esModule', {value: true});
  exports['default'] = update;
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {'default': obj};
  }
  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0,
          arr2 = Array(arr.length); i < arr.length; i++)
        arr2[i] = arr[i];
      return arr2;
    } else {
      return Array.from(arr);
    }
  }
  var _type = $__require('6b');
  var _type2 = _interopRequireDefault(_type);
  var _helpers = $__require('6c');
  function err(operation, expectedTarget, path) {
    return (0, _helpers.makeError)('Baobab.update: cannot apply the "' + operation + '" on ' + ('a non ' + expectedTarget + ' (path: /' + path.join('/') + ').'), {path: path});
  }
  function update(data, path, operation) {
    var opts = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];
    var operationType = operation.type;
    var value = operation.value;
    var _operation$options = operation.options;
    var operationOptions = _operation$options === undefined ? {} : _operation$options;
    var dummy = {root: data},
        dummyPath = ['root'].concat(_toConsumableArray(path)),
        currentPath = [];
    var p = dummy,
        i = undefined,
        l = undefined,
        s = undefined;
    for (i = 0, l = dummyPath.length; i < l; i++) {
      s = dummyPath[i];
      if (i > 0)
        currentPath.push(s);
      if (i === l - 1) {
        if (operationType === 'set') {
          if (opts.pure && p[s] === value)
            return {node: p[s]};
          if (_type2['default'].lazyGetter(p, s)) {
            Object.defineProperty(p, s, {
              value: value,
              enumerable: true,
              configurable: true
            });
          } else if (opts.persistent && !operationOptions.mutableLeaf) {
            p[s] = (0, _helpers.shallowClone)(value);
          } else {
            p[s] = value;
          }
        } else if (operationType === 'monkey') {
          Object.defineProperty(p, s, {
            get: value,
            enumerable: true,
            configurable: true
          });
        } else if (operationType === 'apply') {
          var result = value(p[s]);
          if (opts.pure && p[s] === result)
            return {node: p[s]};
          if (_type2['default'].lazyGetter(p, s)) {
            Object.defineProperty(p, s, {
              value: result,
              enumerable: true,
              configurable: true
            });
          } else if (opts.persistent) {
            p[s] = (0, _helpers.shallowClone)(result);
          } else {
            p[s] = result;
          }
        } else if (operationType === 'push') {
          if (!_type2['default'].array(p[s]))
            throw err('push', 'array', currentPath);
          if (opts.persistent)
            p[s] = p[s].concat([value]);
          else
            p[s].push(value);
        } else if (operationType === 'unshift') {
          if (!_type2['default'].array(p[s]))
            throw err('unshift', 'array', currentPath);
          if (opts.persistent)
            p[s] = [value].concat(p[s]);
          else
            p[s].unshift(value);
        } else if (operationType === 'concat') {
          if (!_type2['default'].array(p[s]))
            throw err('concat', 'array', currentPath);
          if (opts.persistent)
            p[s] = p[s].concat(value);
          else
            p[s].push.apply(p[s], value);
        } else if (operationType === 'splice') {
          if (!_type2['default'].array(p[s]))
            throw err('splice', 'array', currentPath);
          if (opts.persistent)
            p[s] = _helpers.splice.apply(null, [p[s]].concat(value));
          else
            p[s].splice.apply(p[s], value);
        } else if (operationType === 'pop') {
          if (!_type2['default'].array(p[s]))
            throw err('pop', 'array', currentPath);
          if (opts.persistent)
            p[s] = (0, _helpers.splice)(p[s], -1, 1);
          else
            p[s].pop();
        } else if (operationType === 'shift') {
          if (!_type2['default'].array(p[s]))
            throw err('shift', 'array', currentPath);
          if (opts.persistent)
            p[s] = (0, _helpers.splice)(p[s], 0, 1);
          else
            p[s].shift();
        } else if (operationType === 'unset') {
          if (_type2['default'].object(p))
            delete p[s];
          else if (_type2['default'].array(p))
            p.splice(s, 1);
        } else if (operationType === 'merge') {
          if (!_type2['default'].object(p[s]))
            throw err('merge', 'object', currentPath);
          if (opts.persistent)
            p[s] = (0, _helpers.shallowMerge)({}, p[s], value);
          else
            p[s] = (0, _helpers.shallowMerge)(p[s], value);
        } else if (operationType === 'deepMerge') {
          if (!_type2['default'].object(p[s]))
            throw err('deepMerge', 'object', currentPath);
          if (opts.persistent)
            p[s] = (0, _helpers.deepMerge)({}, p[s], value);
          else
            p[s] = (0, _helpers.deepMerge)(p[s], value);
        }
        if (opts.immutable && !operationOptions.mutableLeaf)
          (0, _helpers.deepFreeze)(p);
        break;
      } else if (_type2['default'].primitive(p[s])) {
        p[s] = {};
      } else if (opts.persistent) {
        p[s] = (0, _helpers.shallowClone)(p[s]);
      }
      if (opts.immutable && l > 0)
        (0, _helpers.freeze)(p);
      p = p[s];
    }
    if (_type2['default'].lazyGetter(p, s))
      return {data: dummy.root};
    return {
      data: dummy.root,
      node: p[s]
    };
  }
  module.exports = exports['default'];
  return module.exports;
});

$__System.registerDynamic("6a", ["6b", "6e", "6c"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  Object.defineProperty(exports, '__esModule', {value: true});
  var _createClass = (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ('value' in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps)
        defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })();
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {'default': obj};
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function');
    }
  }
  var _type = $__require('6b');
  var _type2 = _interopRequireDefault(_type);
  var _update2 = $__require('6e');
  var _update3 = _interopRequireDefault(_update2);
  var _helpers = $__require('6c');
  var MonkeyDefinition = function MonkeyDefinition(definition) {
    var _this = this;
    _classCallCheck(this, MonkeyDefinition);
    var monkeyType = _type2['default'].monkeyDefinition(definition);
    if (!monkeyType)
      throw (0, _helpers.makeError)('Baobab.monkey: invalid definition.', {definition: definition});
    this.type = monkeyType;
    if (this.type === 'object') {
      this.getter = definition.get;
      this.projection = definition.cursors || {};
      this.paths = Object.keys(this.projection).map(function(k) {
        return _this.projection[k];
      });
      this.options = definition.options || {};
    } else {
      var offset = 1,
          options = {};
      if (_type2['default'].object(definition[definition.length - 1])) {
        offset++;
        options = definition[definition.length - 1];
      }
      this.getter = definition[definition.length - offset];
      this.projection = definition.slice(0, -offset);
      this.paths = this.projection;
      this.options = options;
    }
    this.paths = this.paths.map(function(p) {
      return [].concat(p);
    });
    this.hasDynamicPaths = this.paths.some(_type2['default'].dynamicPath);
  };
  ;
  exports.MonkeyDefinition = MonkeyDefinition;
  var Monkey = (function() {
    function Monkey(tree, pathInTree, definition) {
      var _this2 = this;
      _classCallCheck(this, Monkey);
      this.tree = tree;
      this.path = pathInTree;
      this.definition = definition;
      var projection = definition.projection,
          relative = _helpers.solveRelativePath.bind(null, pathInTree.slice(0, -1));
      if (definition.type === 'object') {
        this.projection = Object.keys(projection).reduce(function(acc, k) {
          acc[k] = relative(projection[k]);
          return acc;
        }, {});
        this.depPaths = Object.keys(this.projection).map(function(k) {
          return _this2.projection[k];
        });
      } else {
        this.projection = projection.map(relative);
        this.depPaths = this.projection;
      }
      this.state = {killed: false};
      this.writeListener = function(_ref) {
        var path = _ref.data.path;
        if (_this2.state.killed)
          return;
        var concerned = (0, _helpers.solveUpdate)([path], _this2.relatedPaths());
        if (concerned)
          _this2.update();
      };
      this.recursiveListener = function(_ref2) {
        var _ref2$data = _ref2.data;
        var monkey = _ref2$data.monkey;
        var path = _ref2$data.path;
        if (_this2.state.killed)
          return;
        if (_this2 === monkey)
          return;
        var concerned = (0, _helpers.solveUpdate)([path], _this2.relatedPaths(false));
        if (concerned)
          _this2.update();
      };
      this.tree.on('write', this.writeListener);
      this.tree.on('_monkey', this.recursiveListener);
      this.update();
    }
    _createClass(Monkey, [{
      key: 'relatedPaths',
      value: function relatedPaths() {
        var _this3 = this;
        var recursive = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
        var paths = undefined;
        if (this.definition.hasDynamicPaths)
          paths = this.depPaths.map(function(p) {
            return (0, _helpers.getIn)(_this3.tree._data, p).solvedPath;
          });
        else
          paths = this.depPaths;
        var isRecursive = recursive && this.depPaths.some(function(p) {
          return !!_type2['default'].monkeyPath(_this3.tree._monkeys, p);
        });
        if (!isRecursive)
          return paths;
        return paths.reduce(function(accumulatedPaths, path) {
          var monkeyPath = _type2['default'].monkeyPath(_this3.tree._monkeys, path);
          if (!monkeyPath)
            return accumulatedPaths.concat([path]);
          var relatedMonkey = (0, _helpers.getIn)(_this3.tree._monkeys, monkeyPath).data;
          return accumulatedPaths.concat(relatedMonkey.relatedPaths());
        }, []);
      }
    }, {
      key: 'update',
      value: function update() {
        var deps = this.tree.project(this.projection);
        var lazyGetter = (function(tree, def, data) {
          var cache = null,
              alreadyComputed = false;
          return function() {
            if (!alreadyComputed) {
              cache = def.getter.apply(tree, def.type === 'object' ? [data] : data);
              if (tree.options.immutable && def.options.immutable !== false)
                (0, _helpers.deepFreeze)(cache);
              alreadyComputed = true;
            }
            return cache;
          };
        })(this.tree, this.definition, deps);
        lazyGetter.isLazyGetter = true;
        if (this.tree.options.lazyMonkeys) {
          this.tree._data = (0, _update3['default'])(this.tree._data, this.path, {
            type: 'monkey',
            value: lazyGetter
          }, this.tree.options).data;
        } else {
          var result = (0, _update3['default'])(this.tree._data, this.path, {
            type: 'set',
            value: lazyGetter(),
            options: {mutableLeaf: !this.definition.options.immutable}
          }, this.tree.options);
          if ('data' in result)
            this.tree._data = result.data;
        }
        this.tree.emit('_monkey', {
          monkey: this,
          path: this.path
        });
        return this;
      }
    }, {
      key: 'release',
      value: function release() {
        this.tree.off('write', this.writeListener);
        this.tree.off('_monkey', this.monkeyListener);
        this.state.killed = true;
        delete this.projection;
        delete this.depPaths;
        delete this.tree;
      }
    }]);
    return Monkey;
  })();
  exports.Monkey = Monkey;
  return module.exports;
});

$__System.registerDynamic("6b", ["6a"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  Object.defineProperty(exports, '__esModule', {value: true});
  var _monkey = $__require('6a');
  var type = {};
  function anyOf(target, allowed) {
    return allowed.some(function(t) {
      return type[t](target);
    });
  }
  type.array = function(target) {
    return Array.isArray(target);
  };
  type.object = function(target) {
    return target && typeof target === 'object' && !Array.isArray(target) && !(target instanceof Date) && !(target instanceof RegExp) && !(typeof Map === 'function' && target instanceof Map) && !(typeof Set === 'function' && target instanceof Set);
  };
  type.string = function(target) {
    return typeof target === 'string';
  };
  type.number = function(target) {
    return typeof target === 'number';
  };
  type['function'] = function(target) {
    return typeof target === 'function';
  };
  type.primitive = function(target) {
    return target !== Object(target);
  };
  type.splicer = function(target) {
    if (!type.array(target) || target.length < 2)
      return false;
    return anyOf(target[0], ['number', 'function', 'object']) && type.number(target[1]);
  };
  var ALLOWED_FOR_PATH = ['string', 'number', 'function', 'object'];
  type.path = function(target) {
    if (!target && target !== 0 && target !== '')
      return false;
    return [].concat(target).every(function(step) {
      return anyOf(step, ALLOWED_FOR_PATH);
    });
  };
  type.dynamicPath = function(path) {
    return path.some(function(step) {
      return type['function'](step) || type.object(step);
    });
  };
  type.monkeyPath = function(data, path) {
    var subpath = [];
    var c = data,
        i = undefined,
        l = undefined;
    for (i = 0, l = path.length; i < l; i++) {
      subpath.push(path[i]);
      if (typeof c !== 'object')
        return null;
      c = c[path[i]];
      if (c instanceof _monkey.Monkey)
        return subpath;
    }
    return null;
  };
  type.lazyGetter = function(o, propertyKey) {
    var descriptor = Object.getOwnPropertyDescriptor(o, propertyKey);
    return descriptor && descriptor.get && descriptor.get.isLazyGetter === true;
  };
  type.monkeyDefinition = function(definition) {
    if (type.object(definition)) {
      if (!type['function'](definition.get) || definition.cursors && (!type.object(definition.cursors) || !Object.keys(definition.cursors).every(function(k) {
        return type.path(definition.cursors[k]);
      })))
        return null;
      return 'object';
    } else if (type.array(definition)) {
      var offset = 1;
      if (type.object(definition[definition.length - 1]))
        offset++;
      if (!type['function'](definition[definition.length - offset]) || !definition.slice(0, -offset).every(function(p) {
        return type.path(p);
      }))
        return null;
      return 'array';
    }
    return null;
  };
  type.watcherMapping = function(definition) {
    return type.object(definition) && Object.keys(definition).every(function(k) {
      return type.path(definition[k]);
    });
  };
  var VALID_OPERATIONS = ['set', 'apply', 'push', 'unshift', 'concat', 'pop', 'shift', 'deepMerge', 'merge', 'splice', 'unset'];
  type.operationType = function(string) {
    return typeof string === 'string' && !!~VALID_OPERATIONS.indexOf(string);
  };
  exports['default'] = type;
  module.exports = exports['default'];
  return module.exports;
});

$__System.registerDynamic("6c", ["6a", "6b"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  Object.defineProperty(exports, '__esModule', {value: true});
  var _createClass = (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ('value' in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps)
        defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })();
  exports.arrayFrom = arrayFrom;
  exports.before = before;
  exports.coercePath = coercePath;
  exports.getIn = getIn;
  exports.makeError = makeError;
  exports.solveRelativePath = solveRelativePath;
  exports.solveUpdate = solveUpdate;
  exports.splice = splice;
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {'default': obj};
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function');
    }
  }
  var _monkey = $__require('6a');
  var _type = $__require('6b');
  var _type2 = _interopRequireDefault(_type);
  var noop = Function.prototype;
  function index(a, fn) {
    var i = undefined,
        l = undefined;
    for (i = 0, l = a.length; i < l; i++) {
      if (fn(a[i]))
        return i;
    }
    return -1;
  }
  function slice(array) {
    var newArray = new Array(array.length);
    var i = undefined,
        l = undefined;
    for (i = 0, l = array.length; i < l; i++)
      newArray[i] = array[i];
    return newArray;
  }
  var Archive = (function() {
    function Archive(size) {
      _classCallCheck(this, Archive);
      this.size = size;
      this.records = [];
    }
    _createClass(Archive, [{
      key: 'get',
      value: function get() {
        return this.records;
      }
    }, {
      key: 'add',
      value: function add(record) {
        this.records.unshift(record);
        if (this.records.length > this.size)
          this.records.length = this.size;
        return this;
      }
    }, {
      key: 'clear',
      value: function clear() {
        this.records = [];
        return this;
      }
    }, {
      key: 'back',
      value: function back(steps) {
        var record = this.records[steps - 1];
        if (record)
          this.records = this.records.slice(steps);
        return record;
      }
    }]);
    return Archive;
  })();
  exports.Archive = Archive;
  function arrayFrom(culprit) {
    return slice(culprit);
  }
  function before(decorator, fn) {
    return function() {
      decorator.apply(null, arguments);
      fn.apply(null, arguments);
    };
  }
  function cloneRegexp(re) {
    var pattern = re.source;
    var flags = '';
    if (re.global)
      flags += 'g';
    if (re.multiline)
      flags += 'm';
    if (re.ignoreCase)
      flags += 'i';
    if (re.sticky)
      flags += 'y';
    if (re.unicode)
      flags += 'u';
    return new RegExp(pattern, flags);
  }
  function cloner(deep, item) {
    if (!item || typeof item !== 'object' || item instanceof Error || item instanceof _monkey.MonkeyDefinition || item instanceof _monkey.Monkey || 'ArrayBuffer' in global && item instanceof ArrayBuffer)
      return item;
    if (_type2['default'].array(item)) {
      if (deep) {
        var a = [];
        var i = undefined,
            l = undefined;
        for (i = 0, l = item.length; i < l; i++)
          a.push(cloner(true, item[i]));
        return a;
      }
      return slice(item);
    }
    if (item instanceof Date)
      return new Date(item.getTime());
    if (item instanceof RegExp)
      return cloneRegexp(item);
    if (_type2['default'].object(item)) {
      var o = {};
      var k = undefined;
      for (k in item) {
        if (_type2['default'].lazyGetter(item, k)) {
          Object.defineProperty(o, k, {
            get: Object.getOwnPropertyDescriptor(item, k).get,
            enumerable: true,
            configurable: true
          });
        } else if (item.hasOwnProperty(k)) {
          o[k] = deep ? cloner(true, item[k]) : item[k];
        }
      }
      return o;
    }
    return item;
  }
  var shallowClone = cloner.bind(null, false),
      deepClone = cloner.bind(null, true);
  exports.shallowClone = shallowClone;
  exports.deepClone = deepClone;
  function coercePath(target) {
    if (target || target === 0 || target === '')
      return target;
    return [];
  }
  function compare(object, description) {
    var ok = true,
        k = undefined;
    if (!object)
      return false;
    for (k in description) {
      if (_type2['default'].object(description[k])) {
        ok = ok && compare(object[k], description[k]);
      } else if (_type2['default'].array(description[k])) {
        ok = ok && !!~description[k].indexOf(object[k]);
      } else {
        if (object[k] !== description[k])
          return false;
      }
    }
    return ok;
  }
  function freezer(deep, o) {
    if (typeof o !== 'object' || o === null || o instanceof _monkey.Monkey)
      return;
    Object.freeze(o);
    if (!deep)
      return;
    if (Array.isArray(o)) {
      var i = undefined,
          l = undefined;
      for (i = 0, l = o.length; i < l; i++)
        freezer(true, o[i]);
    } else {
      var p = undefined,
          k = undefined;
      for (k in o) {
        if (_type2['default'].lazyGetter(o, k))
          continue;
        p = o[k];
        if (!p || !o.hasOwnProperty(k) || typeof p !== 'object' || Object.isFrozen(p))
          continue;
        freezer(true, p);
      }
    }
  }
  var isFreezeSupported = typeof Object.freeze === 'function';
  var freeze = isFreezeSupported ? freezer.bind(null, false) : noop,
      deepFreeze = isFreezeSupported ? freezer.bind(null, true) : noop;
  exports.freeze = freeze;
  exports.deepFreeze = deepFreeze;
  var NOT_FOUND_OBJECT = {
    data: undefined,
    solvedPath: null,
    exists: false
  };
  function getIn(object, path) {
    if (!path)
      return NOT_FOUND_OBJECT;
    var solvedPath = [];
    var exists = true,
        c = object,
        idx = undefined,
        i = undefined,
        l = undefined;
    for (i = 0, l = path.length; i < l; i++) {
      if (!c)
        return {
          data: undefined,
          solvedPath: solvedPath.concat(path.slice(i)),
          exists: false
        };
      if (typeof path[i] === 'function') {
        if (!_type2['default'].array(c))
          return NOT_FOUND_OBJECT;
        idx = index(c, path[i]);
        if (!~idx)
          return NOT_FOUND_OBJECT;
        solvedPath.push(idx);
        c = c[idx];
      } else if (typeof path[i] === 'object') {
        if (!_type2['default'].array(c))
          return NOT_FOUND_OBJECT;
        idx = index(c, function(e) {
          return compare(e, path[i]);
        });
        if (!~idx)
          return NOT_FOUND_OBJECT;
        solvedPath.push(idx);
        c = c[idx];
      } else {
        solvedPath.push(path[i]);
        exists = typeof c === 'object' && path[i] in c;
        c = c[path[i]];
      }
    }
    return {
      data: c,
      solvedPath: solvedPath,
      exists: exists
    };
  }
  function makeError(message, data) {
    var err = new Error(message);
    for (var k in data) {
      err[k] = data[k];
    }
    return err;
  }
  function merger(deep) {
    for (var _len = arguments.length,
        objects = Array(_len > 1 ? _len - 1 : 0),
        _key = 1; _key < _len; _key++) {
      objects[_key - 1] = arguments[_key];
    }
    var o = objects[0];
    var t = undefined,
        i = undefined,
        l = undefined,
        k = undefined;
    for (i = 1, l = objects.length; i < l; i++) {
      t = objects[i];
      for (k in t) {
        if (deep && _type2['default'].object(t[k]) && !(t[k] instanceof _monkey.Monkey)) {
          o[k] = merger(true, o[k] || {}, t[k]);
        } else {
          o[k] = t[k];
        }
      }
    }
    return o;
  }
  var shallowMerge = merger.bind(null, false),
      deepMerge = merger.bind(null, true);
  exports.shallowMerge = shallowMerge;
  exports.deepMerge = deepMerge;
  function solveRelativePath(base, to) {
    var solvedPath = [];
    to = [].concat(to);
    for (var i = 0,
        l = to.length; i < l; i++) {
      var step = to[i];
      if (step === '.') {
        if (!i)
          solvedPath = base.slice(0);
      } else if (step === '..') {
        solvedPath = (!i ? base : solvedPath).slice(0, -1);
      } else {
        solvedPath.push(step);
      }
    }
    return solvedPath;
  }
  function solveUpdate(affectedPaths, comparedPaths) {
    var i = undefined,
        j = undefined,
        k = undefined,
        l = undefined,
        m = undefined,
        n = undefined,
        p = undefined,
        c = undefined,
        s = undefined;
    for (i = 0, l = affectedPaths.length; i < l; i++) {
      p = affectedPaths[i];
      if (!p.length)
        return true;
      for (j = 0, m = comparedPaths.length; j < m; j++) {
        c = comparedPaths[j];
        if (!c || !c.length)
          return true;
        for (k = 0, n = c.length; k < n; k++) {
          s = c[k];
          if (s != p[k])
            break;
          if (k + 1 === n || k + 1 === p.length)
            return true;
        }
      }
    }
    return false;
  }
  function splice(array, startIndex, nb) {
    nb = Math.max(0, nb);
    if (_type2['default']['function'](startIndex))
      startIndex = index(array, startIndex);
    if (_type2['default'].object(startIndex))
      startIndex = index(array, function(e) {
        return compare(e, startIndex);
      });
    for (var _len2 = arguments.length,
        elements = Array(_len2 > 3 ? _len2 - 3 : 0),
        _key2 = 3; _key2 < _len2; _key2++) {
      elements[_key2 - 3] = arguments[_key2];
    }
    if (startIndex >= 0)
      return array.slice(0, startIndex).concat(elements).concat(array.slice(startIndex + nb));
    return array.slice(0, array.length + startIndex).concat(elements).concat(array.slice(array.length + startIndex + nb));
  }
  var uniqid = (function() {
    var i = 0;
    return function() {
      return i++;
    };
  })();
  exports.uniqid = uniqid;
  return module.exports;
});

$__System.registerDynamic("6f", ["68", "69", "6a", "6d", "6b", "6e", "6c"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  Object.defineProperty(exports, '__esModule', {value: true});
  var _createClass = (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ('value' in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps)
        defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })();
  var _get = function get(_x3, _x4, _x5) {
    var _again = true;
    _function: while (_again) {
      var object = _x3,
          property = _x4,
          receiver = _x5;
      _again = false;
      if (object === null)
        object = Function.prototype;
      var desc = Object.getOwnPropertyDescriptor(object, property);
      if (desc === undefined) {
        var parent = Object.getPrototypeOf(object);
        if (parent === null) {
          return undefined;
        } else {
          _x3 = parent;
          _x4 = property;
          _x5 = receiver;
          _again = true;
          desc = parent = undefined;
          continue _function;
        }
      } else if ('value' in desc) {
        return desc.value;
      } else {
        var getter = desc.get;
        if (getter === undefined) {
          return undefined;
        }
        return getter.call(receiver);
      }
    }
  };
  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};
      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key))
            newObj[key] = obj[key];
        }
      }
      newObj['default'] = obj;
      return newObj;
    }
  }
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {'default': obj};
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function');
    }
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== 'function' && superClass !== null) {
      throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }});
    if (superClass)
      Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
  var _emmett = $__require('68');
  var _emmett2 = _interopRequireDefault(_emmett);
  var _cursor = $__require('69');
  var _cursor2 = _interopRequireDefault(_cursor);
  var _monkey = $__require('6a');
  var _watcher = $__require('6d');
  var _watcher2 = _interopRequireDefault(_watcher);
  var _type = $__require('6b');
  var _type2 = _interopRequireDefault(_type);
  var _update2 = $__require('6e');
  var _update3 = _interopRequireDefault(_update2);
  var _helpers = $__require('6c');
  var helpers = _interopRequireWildcard(_helpers);
  var arrayFrom = helpers.arrayFrom;
  var coercePath = helpers.coercePath;
  var deepFreeze = helpers.deepFreeze;
  var getIn = helpers.getIn;
  var makeError = helpers.makeError;
  var deepClone = helpers.deepClone;
  var deepMerge = helpers.deepMerge;
  var shallowClone = helpers.shallowClone;
  var shallowMerge = helpers.shallowMerge;
  var uniqid = helpers.uniqid;
  var DEFAULTS = {
    autoCommit: true,
    asynchronous: true,
    immutable: true,
    lazyMonkeys: true,
    persistent: true,
    pure: true,
    validate: null,
    validationBehavior: 'rollback'
  };
  function hashPath(path) {
    return 'λ' + path.map(function(step) {
      if (_type2['default']['function'](step) || _type2['default'].object(step))
        return '#' + uniqid() + '#';
      return step;
    }).join('λ');
  }
  var Baobab = (function(_Emitter) {
    _inherits(Baobab, _Emitter);
    function Baobab(initialData, opts) {
      var _this = this;
      _classCallCheck(this, Baobab);
      _get(Object.getPrototypeOf(Baobab.prototype), 'constructor', this).call(this);
      if (arguments.length < 1)
        initialData = {};
      if (!_type2['default'].object(initialData) && !_type2['default'].array(initialData))
        throw makeError('Baobab: invalid data.', {data: initialData});
      this.options = shallowMerge({}, DEFAULTS, opts);
      if (!this.options.persistent) {
        this.options.immutable = false;
        this.options.pure = false;
      }
      this._identity = '[object Baobab]';
      this._cursors = {};
      this._future = null;
      this._transaction = [];
      this._affectedPathsIndex = {};
      this._monkeys = {};
      this._previousData = null;
      this._data = initialData;
      this.root = new _cursor2['default'](this, [], 'λ');
      delete this.root.release;
      if (this.options.immutable)
        deepFreeze(this._data);
      var bootstrap = function bootstrap(name) {
        _this[name] = function() {
          var r = this.root[name].apply(this.root, arguments);
          return r instanceof _cursor2['default'] ? this : r;
        };
      };
      ['apply', 'clone', 'concat', 'deepClone', 'deepMerge', 'exists', 'get', 'push', 'merge', 'pop', 'project', 'serialize', 'set', 'shift', 'splice', 'unset', 'unshift'].forEach(bootstrap);
      this._refreshMonkeys();
      var validationError = this.validate();
      if (validationError)
        throw Error('Baobab: invalid data.', {error: validationError});
    }
    _createClass(Baobab, [{
      key: '_refreshMonkeys',
      value: function _refreshMonkeys(node, path, operation) {
        var _this2 = this;
        var clean = function clean(data) {
          var p = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
          if (data instanceof _monkey.Monkey) {
            data.release();
            (0, _update3['default'])(_this2._monkeys, p, {type: 'unset'}, {
              immutable: false,
              persistent: false,
              pure: false
            });
            return;
          }
          if (_type2['default'].object(data)) {
            for (var k in data) {
              clean(data[k], p.concat(k));
            }
          }
        };
        var walk = function walk(data) {
          var p = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
          if (data instanceof _monkey.MonkeyDefinition || data instanceof _monkey.Monkey) {
            var monkeyInstance = new _monkey.Monkey(_this2, p, data instanceof _monkey.Monkey ? data.definition : data);
            (0, _update3['default'])(_this2._monkeys, p, {
              type: 'set',
              value: monkeyInstance
            }, {
              immutable: false,
              persistent: false,
              pure: false
            });
            return;
          }
          if (_type2['default'].object(data)) {
            for (var k in data) {
              walk(data[k], p.concat(k));
            }
          }
        };
        if (!arguments.length) {
          walk(this._data);
        } else {
          var monkeysNode = getIn(this._monkeys, path).data;
          if (monkeysNode)
            clean(monkeysNode, path);
          if (operation !== 'unset') {
            walk(node, path);
          }
        }
        return this;
      }
    }, {
      key: 'validate',
      value: function validate(affectedPaths) {
        var _options = this.options;
        var validate = _options.validate;
        var behavior = _options.validationBehavior;
        if (typeof validate !== 'function')
          return null;
        var error = validate.call(this, this._previousData, this._data, affectedPaths || [[]]);
        if (error instanceof Error) {
          if (behavior === 'rollback') {
            this._data = this._previousData;
            this._affectedPathsIndex = {};
            this._transaction = [];
            this._previousData = this._data;
          }
          this.emit('invalid', {error: error});
          return error;
        }
        return null;
      }
    }, {
      key: 'select',
      value: function select(path) {
        path = path || [];
        if (arguments.length > 1)
          path = arrayFrom(arguments);
        if (!_type2['default'].path(path))
          throw makeError('Baobab.select: invalid path.', {path: path});
        path = [].concat(path);
        var hash = hashPath(path);
        var cursor = this._cursors[hash];
        if (!cursor) {
          cursor = new _cursor2['default'](this, path, hash);
          this._cursors[hash] = cursor;
        }
        this.emit('select', {
          path: path,
          cursor: cursor
        });
        return cursor;
      }
    }, {
      key: 'update',
      value: function update(path, operation) {
        var _this3 = this;
        path = coercePath(path);
        if (!_type2['default'].operationType(operation.type))
          throw makeError('Baobab.update: unknown operation type "' + operation.type + '".', {operation: operation});
        var _getIn = getIn(this._data, path);
        var solvedPath = _getIn.solvedPath;
        var exists = _getIn.exists;
        if (!solvedPath)
          throw makeError('Baobab.update: could not solve the given path.', {path: solvedPath});
        var monkeyPath = _type2['default'].monkeyPath(this._monkeys, solvedPath);
        if (monkeyPath && solvedPath.length > monkeyPath.length)
          throw makeError('Baobab.update: attempting to update a read-only path.', {path: solvedPath});
        if (operation.type === 'unset' && !exists)
          return;
        var realOperation = operation;
        if (/merge/i.test(operation.type)) {
          var monkeysNode = getIn(this._monkeys, solvedPath).data;
          if (_type2['default'].object(monkeysNode)) {
            realOperation = shallowClone(realOperation);
            var currentNode = getIn(this._data, solvedPath).data;
            if (/deep/i.test(realOperation.type))
              realOperation.value = deepMerge({}, deepMerge({}, currentNode, deepClone(monkeysNode)), realOperation.value);
            else
              realOperation.value = shallowMerge({}, deepMerge({}, currentNode, deepClone(monkeysNode)), realOperation.value);
          }
        }
        if (!this._transaction.length)
          this._previousData = this._data;
        var result = (0, _update3['default'])(this._data, solvedPath, realOperation, this.options);
        var data = result.data;
        var node = result.node;
        if (!('data' in result))
          return node;
        var affectedPath = solvedPath.concat(operation.type === 'push' ? node.length - 1 : []);
        var hash = hashPath(affectedPath);
        this._data = data;
        this._affectedPathsIndex[hash] = true;
        this._transaction.push(shallowMerge({}, operation, {path: affectedPath}));
        this._refreshMonkeys(node, solvedPath, operation.type);
        this.emit('write', {path: affectedPath});
        if (!this.options.autoCommit)
          return node;
        if (!this.options.asynchronous) {
          this.commit();
          return node;
        }
        if (!this._future)
          this._future = setTimeout(function() {
            return _this3.commit();
          }, 0);
        return node;
      }
    }, {
      key: 'commit',
      value: function commit() {
        if (!this._transaction.length)
          return this;
        if (this._future)
          this._future = clearTimeout(this._future);
        var affectedPaths = Object.keys(this._affectedPathsIndex).map(function(h) {
          return h !== 'λ' ? h.split('λ').slice(1) : [];
        });
        var validationError = this.validate(affectedPaths);
        if (validationError)
          return this;
        var transaction = this._transaction,
            previousData = this._previousData;
        this._affectedPathsIndex = {};
        this._transaction = [];
        this._previousData = this._data;
        this.emit('update', {
          paths: affectedPaths,
          currentData: this._data,
          transaction: transaction,
          previousData: previousData
        });
        return this;
      }
    }, {
      key: 'getMonkey',
      value: function getMonkey(path) {
        path = coercePath(path);
        var monkey = getIn(this._monkeys, [].concat(path)).data;
        if (monkey instanceof _monkey.Monkey)
          return monkey;
        return null;
      }
    }, {
      key: 'watch',
      value: function watch(mapping) {
        return new _watcher2['default'](this, mapping);
      }
    }, {
      key: 'release',
      value: function release() {
        var k = undefined;
        this.emit('release');
        delete this.root;
        delete this._data;
        delete this._previousData;
        delete this._transaction;
        delete this._affectedPathsIndex;
        delete this._monkeys;
        for (k in this._cursors)
          this._cursors[k].release();
        delete this._cursors;
        this.kill();
      }
    }, {
      key: 'toJSON',
      value: function toJSON() {
        return this.serialize();
      }
    }, {
      key: 'toString',
      value: function toString() {
        return this._identity;
      }
    }]);
    return Baobab;
  })(_emmett2['default']);
  exports['default'] = Baobab;
  Baobab.monkey = function() {
    for (var _len = arguments.length,
        args = Array(_len),
        _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (!args.length)
      throw new Error('Baobab.monkey: missing definition.');
    if (args.length === 1 && typeof args[0] !== 'function')
      return new _monkey.MonkeyDefinition(args[0]);
    return new _monkey.MonkeyDefinition(args);
  };
  Baobab.dynamicNode = Baobab.monkey;
  Baobab.Cursor = _cursor2['default'];
  Baobab.MonkeyDefinition = _monkey.MonkeyDefinition;
  Baobab.Monkey = _monkey.Monkey;
  Baobab.type = _type2['default'];
  Baobab.helpers = helpers;
  Baobab.VERSION = '2.3.2';
  module.exports = exports['default'];
  return module.exports;
});

$__System.registerDynamic("70", ["6f"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Baobab = $__require('6f');
  function deepmerge(target, src) {
    var array = Array.isArray(src);
    var dst = array && [] || {};
    if (array) {
      target = target || [];
      dst = src.slice();
      src.forEach(function(e, i) {
        if (typeof dst[i] === 'undefined') {
          dst[i] = e;
        } else if (typeof e === 'object') {
          dst[i] = deepmerge(target[i], e);
        }
      });
    } else {
      if (target && typeof target === 'object') {
        Object.keys(target).forEach(function(key) {
          dst[key] = target[key];
        });
      }
      Object.keys(src).forEach(function(key) {
        if (typeof src[key] !== 'object' || !src[key]) {
          dst[key] = src[key];
        } else {
          if (!target[key]) {
            dst[key] = src[key];
          } else {
            dst[key] = deepmerge(target[key], src[key]);
          }
        }
      });
    }
    return dst;
  }
  ;
  var Model = function(initialState, options) {
    options = options || {};
    var tree = new Baobab(initialState, options);
    var model = function(controller) {
      controller.on('reset', function() {
        tree.set(initialState);
      });
      controller.on('seek', function(seek, recording) {
        recording.initialState.forEach(function(state) {
          tree.set(state.path, state.value);
        });
      });
      return {
        tree: tree,
        logModel: function() {
          return tree.get();
        },
        accessors: {
          get: function(path) {
            return tree.get(path);
          },
          toJSON: function() {
            return tree.toJSON();
          },
          toJS: function(path) {
            return tree.get(path);
          },
          serialize: function(path) {
            return tree.serialize(path);
          },
          export: function() {
            return tree.serialize();
          },
          keys: function(path) {
            return Object.keys(tree.get(path));
          },
          findWhere: function(path, obj) {
            var keysCount = Object.keys(obj).length;
            return tree.get(path).filter(function(item) {
              return Object.keys(item).filter(function(key) {
                return key in obj && obj[key] === item[key];
              }).length === keysCount;
            }).pop();
          }
        },
        mutators: {
          set: function(path, value) {
            tree.set(path, value);
          },
          import: function(newState) {
            var newState = deepmerge(initialState, newState);
            tree.set(newState);
          },
          unset: function(path, keys) {
            if (keys) {
              keys.forEach(function(key) {
                tree.unset(path.concat(key));
              });
            } else {
              tree.unset(path);
            }
          },
          push: function(path, value) {
            tree.push(path, value);
          },
          splice: function() {
            var args = [].slice.call(arguments);
            tree.splice.call(tree, args.shift(), args);
          },
          merge: function(path, value) {
            tree.merge(path, value);
          },
          concat: function(path, value) {
            tree.apply(path, function(existingValue) {
              return existingValue.concat(value);
            });
          },
          pop: function(path) {
            var val;
            tree.apply(path, function(existingValue) {
              var copy = existingValue.slice();
              val = copy.pop();
              return copy;
            });
            return val;
          },
          shift: function(path) {
            var val;
            tree.apply(path, function(existingValue) {
              var copy = existingValue.slice();
              val = copy.shift();
              return copy;
            });
            return val;
          },
          unshift: function(path, value) {
            tree.unshift(path, value);
          }
        }
      };
    };
    model.tree = tree;
    return model;
  };
  Model.monkey = Baobab.monkey;
  Model.dynamicNode = Baobab.dynamicNode;
  module.exports = Model;
  return module.exports;
});

$__System.registerDynamic("71", ["12", "67", "70"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  Object.defineProperty(exports, "__esModule", {value: true});
  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
    return typeof obj;
  } : function(obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
  };
  var _index = $__require('12');
  var _index2 = _interopRequireDefault(_index);
  var _cerebral = $__require('67');
  var _cerebral2 = _interopRequireDefault(_cerebral);
  var _cerebralModelBaobab = $__require('70');
  var _cerebralModelBaobab2 = _interopRequireDefault(_cerebralModelBaobab);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  var app = void 0;
  var vnodes = {};
  _index2.default.nodes = function() {
    return vnodes;
  };
  _index2.default.instance = function() {
    return app;
  };
  _index2.default.app = function(init) {
    if ((!init || typeof init === 'string') && app) {
      return app.get(init);
    } else {
      app = (0, _cerebral2.default)((0, _cerebralModelBaobab2.default)(init));
      return app;
    }
  };
  _index2.default.get = function() {
    var _app;
    return (_app = app).get.apply(_app, arguments);
  };
  _index2.default.on = function() {
    var _app2;
    (_app2 = app).on.apply(_app2, arguments);
  };
  _index2.default.run = function run(box, element) {
    var id = element && element.id ? element.id : '_';
    vnodes[id] = _index2.default.render(box, vnodes[id] || element, app);
  };
  _index2.default.modules = function(m) {
    return (typeof m === 'undefined' ? 'undefined' : _typeof(m)) === 'object' ? app.addModules(m) : app.getModules(m);
  };
  _index2.default.signals = function(s) {
    for (var _len = arguments.length,
        args = Array(_len > 1 ? _len - 1 : 0),
        _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    return (typeof s === 'undefined' ? 'undefined' : _typeof(s)) === 'object' ? app.addSignals(s) : args.length ? app.getSignals(s).apply(undefined, args) : app.getSignals(s);
  };
  _index2.default.services = function(s) {
    for (var _len2 = arguments.length,
        args = Array(_len2 > 1 ? _len2 - 1 : 0),
        _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }
    return (typeof s === 'undefined' ? 'undefined' : _typeof(s)) === 'object' ? app.addServices(s) : args.length ? app.getServices(s).apply(undefined, args) : app.getServices(s);
  };
  _index2.default.router = function() {
    console.error('bitbox.router disabled, install cerebral-module-router and set bitbox.modules()');
  };
  exports.default = _index2.default;
  return module.exports;
});

$__System.registerDynamic("72", ["71"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.form = exports.input = exports.button = exports.br = exports.hr = exports.h5 = exports.h4 = exports.h3 = exports.h2 = exports.h1 = exports.a = exports.p = exports.span = exports.div = exports.footer = exports.header = exports.main = exports.section = exports.code = exports.pre = exports.body = exports.head = exports.html = undefined;
  var _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  exports.parse = parse;
  exports.style = style;
  exports.script = script;
  var _bitbox = $__require('71');
  var _bitbox2 = _interopRequireDefault(_bitbox);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  var e = function e(key) {
    return function(props, body) {
      return _bitbox2.default.element(_extends({}, props, {key: key}), body);
    };
  };
  var CSS_SELECTOR = /(^|\}|\{)\s*([^\{\}]+)\s*[^\$](?=\{)/g;
  var CSS_COMMENT = /\/\*[^\x00]*?\*\//gm;
  function parse(tag, style, type) {
    return style.replace(CSS_COMMENT, '').replace(CSS_SELECTOR, function(m, p1, p2) {
      return p1 + ' ' + p2.split(/\s*,\s*/g).map(function(sel) {
        var s = sel.trim().replace(/:scope\s*/, '').trim();
        return '' + tag + (s && s.indexOf(':') !== 0 && s.indexOf('.') !== 0 && s.indexOf('#') !== 0 ? ' > ' : '') + s + ' ';
      }).join(',');
    }).trim();
  }
  function style(props, body) {
    return _bitbox2.default.h('style', {type: props.type}, '/** box style */ ' + (props.scoped ? parse(props.scope.key, body, props.type) : body));
  }
  function script(props, body) {
    return _bitbox2.default.h('script', {type: props.type}, '/** box script */ ' + body);
  }
  var html = exports.html = e('html');
  var head = exports.head = e('head');
  var body = exports.body = e('body');
  var pre = exports.pre = e('pre');
  var code = exports.code = e('code');
  var section = exports.section = e('section');
  var main = exports.main = e('main');
  var header = exports.header = e('header');
  var footer = exports.footer = e('footer');
  var div = exports.div = e('div');
  var span = exports.span = e('span');
  var p = exports.p = e('p');
  var a = exports.a = e('a');
  var h1 = exports.h1 = e('h1');
  var h2 = exports.h2 = e('h2');
  var h3 = exports.h3 = e('h3');
  var h4 = exports.h4 = e('h4');
  var h5 = exports.h5 = e('h5');
  var hr = exports.hr = e('hr');
  var br = exports.br = e('br');
  var button = exports.button = e('button');
  var input = exports.input = e('input');
  var form = exports.form = e('form');
  return module.exports;
});

$__System.registerDynamic("73", ["72"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('72');
  return module.exports;
});

$__System.register("1", ["71", "73"], function($__export) {
  "use strict";
  var bitbox,
      input,
      h1,
      div,
      body,
      span,
      app;
  function versions() {
    var $tree = [];
    var margin = 8;
    $tree.push(div({
      bg: [null, 700],
      color: ['white', 0.9],
      padding: 16
    }, function($tree) {
      $tree.push(span({margin: margin}, function($tree) {
        $tree.push('node: ' + process.versions.node);
        return $tree;
      }([])));
      $tree.push(span({margin: margin}, function($tree) {
        $tree.push('chrome: ' + process.versions.chrome);
        return $tree;
      }([])));
      $tree.push(span({margin: margin}, function($tree) {
        $tree.push('electron: ' + process.versions.electron);
        return $tree;
      }([])));
      return $tree;
    }([])));
    return $tree.pop();
  }
  return {
    setters: [function($__m) {
      bitbox = $__m.default;
    }, function($__m) {
      input = $__m.input;
      h1 = $__m.h1;
      div = $__m.div;
      body = $__m.body;
      span = $__m.span;
    }],
    execute: function() {
      app = bitbox(function(_ref) {
        var state = _ref.state;
        var signals = _ref.signals;
        var style = {
          margin: '0',
          font: '14px Helvetica Neue',
          WebkitFontSmoothing: 'antialiased',
          WebkitTextSizeAdjust: '100%',
          background: bitbox.color('grey', 100)
        };
        return body({style: style}, function($tree) {
          $tree.push(div({padding: 24}, function($tree) {
            $tree.push(h1({color: 'slate'}, function($tree) {
              $tree.push(state.name);
              return $tree;
            }([])));
            $tree.push(input({
              value: state.name,
              on: {input: function input(e) {
                  return signals.nameChanged({value: e.target.value});
                }}
            }));
            return $tree;
          }([])));
          $tree.push(versions({}));
          return $tree;
        }([]));
      });
      bitbox.app({name: 'bitbox /electron'});
      bitbox.signals({nameChanged: [function changeName(_ref) {
          var state = _ref.state;
          var input = _ref.input;
          state.set('name', input.value);
        }]});
      bitbox.run(app, document.body);
      window.bitbox = bitbox;
      $__export('default', bitbox);
    }
  };
});

})
(function(factory) {
  if (typeof define == 'function' && define.amd)
    define([], factory);
  else if (typeof module == 'object' && module.exports && typeof require == 'function')
    module.exports = factory();
  else
    demoApp = factory();
});