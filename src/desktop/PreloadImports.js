// @flow
import {Request} from '../api/common/WorkerProtocol.js'
import {lang} from './DesktopLocalizationProvider.js'
import * as localShortcut from 'electron-localshortcut'

/**
 * keep the import in DesktopMain and set up functions that are missing in node
 */
function keep() {
}

/**
 * add any functions that should be available in preload.js here.
 * preload can only require modules that were previously loaded in the node thread
 */
const PreloadImports = {
	localShortcut,
	Request,
	lang,
	keep
}

export default PreloadImports