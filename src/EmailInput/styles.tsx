
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
				display: (windowWidth > 680) ? 'flex' : 'block',
				justifyContent: 'space-around',
				maxWidth: (windowWidth > 680) ? '800px' : '550px',
				margin: 'auto'}

  return styleVal;
}

function showContentTextBox() {

  let styleVal: React.CSSProperties = {
						backgroundColor: "#FFF",
						padding: '10px 10px',
						borderRadius: '10px',
						borderStyle: 'solid',
						borderColor: '#000',
						width: '60%',
						maxWidth: '500px',
						marginTop: '10px',
						fontFamily: 'Helvetica'
					}

  return styleVal;
}

function showContentSubmit(windowWidth: number) {

  let styleVal: React.CSSProperties = {
					margin: (windowWidth > 680) ? '10px 0px 2px 0px' : '0px',
					borderRadius: '10px',
					padding: '10px 10px',
					backgroundColor: '#000',
					border: '2px solid #44bbff',
					color: '#bbbbbb',
					width: '100%',
					maxWidth: '200px',
					fontWeight: 'bold',
					fontFamily: 'Helvetica',
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
				top: '10px',
				right: '6%',
				visibility: showButton ? "visible" : "hidden"
			}

  return styleVal;
}

function earlyAccessButton() {
  
  let styleVal: React.CSSProperties = {
						backgroundColor: '#000',
						border: '2px solid #44bbff',
						color: '#bbbbbb',
						borderRadius: '12px',
						padding: '10px 10px',
						width: '100%',
						maxWidth: '200px',
						marginTop: '25px',
						fontWeight: 'bold',
						display: 'inline-block',
						fontSize: '14px',
						textDecoration: 'none',
						textAlign: 'center',
						fontFamily: 'Helvetica'

					}

  return styleVal;
}


export default useStyles;

