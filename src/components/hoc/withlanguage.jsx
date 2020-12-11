import React from 'react';
import AllStrings from '../../utils/strings'

const withLanguage = WrappedComponent => {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                currentLanguage:'en'
            };
        }

        setNewLanguage = language =>{
            this.setState({
                currentLanguage:language
            }, ()=>{
                let currentLanguageSet = AllStrings[this.state.currentLanguage]
                for (const key in currentLanguageSet) {
                    localStorage.setItem(`${key}`, `${currentLanguageSet[key]}`);
                }
                window.location.reload(false);
                
            })
            // console.log('evil smile ):')
        }

        render() {
            // const newProps = this.state
            return (
                <WrappedComponent
                    {...this.props}
                    languageSet = {AllStrings[this.state.currentLanguage]}
                    changeLanguage = {this.setNewLanguage}
                />
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        langSet: state.langSet
    };
}

// export statedWithLanguage = connect()(withLanguage)
// export default connect(mapStateToProps)(withLanguage);
export default withLanguage;