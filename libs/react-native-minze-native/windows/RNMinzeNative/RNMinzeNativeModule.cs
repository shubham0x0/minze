using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace Minze.Native.RNMinzeNative
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNMinzeNativeModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNMinzeNativeModule"/>.
        /// </summary>
        internal RNMinzeNativeModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNMinzeNative";
            }
        }
    }
}
