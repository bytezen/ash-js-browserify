/**
 * Ash framework core
 *
 * @author Rhazes Spell
 */
    var core = {
        VERSION: '0.2.0'
    };

    core.Engine = require('ash/core/engine');
    core.ComponentMatchingFamily = require('ash/core/componentmatchingfamily');
    core.Entity = require('ash/core/entity');
    core.EntityList = require('ash/core/entitylist');
    core.Family = require('ash/core/family');
    core.Node = require('ash/core/node');
    core.NodeList = require('ash/core/nodelist');
    core.NodePool = require('ash/core/nodepool');
    core.System = require('ash/core/system');
    core.SystemList = require('ash/core/systemlist');

    // util classes
    // TODO separate this?
    core.Class = require('lib/brejep/class');
    core.Signals = require('lib/vendor/signals');

   module.exports = core;

