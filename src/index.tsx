import { hydrate } from "react"
import Router from "preact-router"
import "./style.css"
import QCAutomata from "./qcautomata"
import ConwaysGOL3D from "./conwaysgol3D"
import ConwaysGOL2D from "./conwaysgol2D"
import ConwaysGOL2DWASM from "./conwaysgol2D-wasm"
import Home from "./home"

const App = () => {
	return (
		<Router>
			<Home path='/' />
			<ConwaysGOL2D path='/conwaysgol2D' />
			<ConwaysGOL2DWASM path='/conwaysgol2D-wasm' />
			<ConwaysGOL3D path='/conwaysgol3D' />
			<QCAutomata path='/qcautomata' />
		</Router>
	)
}

if (typeof window !== "undefined") {
	hydrate(<App />, document.getElementById("app"))
}
