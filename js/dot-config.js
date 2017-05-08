// Copyright 2013-2015, University of Colorado Boulder

/**
 * Configuration file for development and production deployments.
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */

require.config( {
  deps: [ 'dot-main' ],

  paths: {

    // plugins
    image: '../../chipper/js/requirejs-plugins/image',
    ifphetio: '../../chipper/js/requirejs-plugins/ifphetio',

    // third-party libs
    text: '../../sherpa/lib/text-2.0.12',
    DOT: '../../dot/js',
    PHET_CORE: '../../phet-core/js',
    AXON: '../../axon/js',

    // Needs to be compatible in the sim, and also with scenery unit tests.
    BRAND: '../../brand/' + (window.phet && phet.chipper && phet.chipper.brand ? phet.chipper.brand : 'adapted-from-phet') + '/js',

    TANDEM: '../../tandem/js',
    REPOSITORY: '..'
  },

  // optional cache buster to make browser refresh load all included scripts, can be disabled with ?cacheBuster=false
  urlArgs: Date.now()
} );
