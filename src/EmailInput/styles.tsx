
import * as React from 'react';

const useStyles = {
	earlyAccessButton: earlyAccessButton,
	earlyAccessFrame: earlyAccessFrame,
	showContentSubmit: showContentSubmit,
	showContentTextBox: showContentTextBox,
	showContentFrame: showContentFrame,
	showLoadingFrame: showLoadingFrame,
	showLoadingIcon: showLoadingIcon
}

let small = 576;
let medium = 768;
let large = 992;

function StyleResize(windowWidth: number, sm:string, md:string, lg:string, def:string): string {
	if(windowWidth <= small )
		return sm;

	if(windowWidth > small && windowWidth <= medium)
		return md;

	if(windowWidth > medium && windowWidth >= large)
		return lg; 

	return def;
}

    
	
function showLoadingFrame() {
 
  let styleVal: React.CSSProperties = {
		display: 'block',margin: 'auto auto', 
		backgroundColor: 'rgba(0,0,0,0.0)' 
	}

  return styleVal;
}

function showLoadingIcon() {
 
  let styleVal: React.CSSProperties = {
				margin: 'auto auto'
				}

  return styleVal;
}


function showContentFrame(windowWidth: number) {
 
  let styleVal: React.CSSProperties = {
				display: StyleResize(windowWidth,"block", "block", "block", "flex"),
				justifyContent: 'space-around',
				maxWidth: StyleResize(windowWidth,"100%", "100%", "600px", "800px"),
				margin: 'auto'}

  return styleVal;
}

function showContentTextBox(windowWidth: number) {

  let styleVal: React.CSSProperties = {
						backgroundColor: "#FFF",
						padding: '10px 10px',
						borderRadius: '10px',
						borderStyle: 'solid',
						borderColor: '#000',
						width: '60%',
						maxWidth: '500px',
						marginTop: '10px',
						fontSize: "18px",
						fontFamily: 'Helvetica Neue',
						height: StyleResize(windowWidth, '25px', '30px', '35px', '35px')
					}

  return styleVal;
}

function showContentSubmit(windowWidth: number) {

  let styleVal: React.CSSProperties = {
					margin: (windowWidth > 680) ? '10px 0px 2px 0px' : '10px 0px 2px 0px',
					marginTop: "10px",
					borderRadius: '10px',
					padding: '15px 10px',
					backgroundColor: '#1199EE',
					border: '2px solid #1199EE',
					color: '#FFF',
					width: '64%',
					maxWidth: StyleResize(windowWidth, '100%','100%','180px', '200px'),
					fontWeight: 'bold',
					fontFamily: 'Helvetica Neue',
					fontSize: "18px",
					textAlign: 'center'
				}
  return styleVal;
}

function earlyAccessFrame(showButton: boolean, windowWidth: number) {
  
  let styleVal: React.CSSProperties = {
				width: '100%',
				height: 'auto',
				maxWidth: (windowWidth > 500) ? '150px' : '100px',
				fontWeight: 'bold',
				position: 'fixed',
				top: '-15px',
				right: StyleResize(windowWidth, '4%','6%','12%', '12%'),
				visibility: showButton ? "visible" : "hidden"
			}

  return styleVal;
}

function earlyAccessButton(windowWidth: number) {
  
  let styleVal: React.CSSProperties = {
						backgroundColor: '#1199EE',
						border: '2px solid #1199EE',
						color: '#FFF',
						borderRadius: '12px',
						padding: '10px 0px',
						width: '100%',
						maxWidth: '120px',
						marginTop: '25px',
						fontWeight: 'bold',
						display: 'inline-block',
						fontSize: (windowWidth > 500) ? '12px' : '2.5vw',
						textDecoration: 'none',
						textAlign: 'center',
						fontFamily: 'Helvetica Neue'

					}

  return styleVal;
}


export default useStyles;

