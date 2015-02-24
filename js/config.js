// Copyright 2002-2014, University of Colorado Boulder

require.config( {
  deps: [ 'main', 'PHET_CORE/main', 'AXON/main' ],

  paths: {
    DOT: '.',
    PHET_CORE: '../../phet-core/js',
    AXON: '../../axon/js'
  },

  // optional cache buster to make browser refresh load all included scripts, can be disabled with ?cacheBuster=false
  urlArgs: Date.now()
} );
