import React from 'react';

import { CardList } from './components/card-list/card-list.component'

import { SearchBox} from './components/search-box/search-box.component'

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      ataksuki: [
        {
          id: 1,
          name: "Naruto Uzumaki",
          image: `https://www.freeiconspng.com/uploads/naruto-icon-13.jpg`
        },
        {
          id: 2,
          name: "Sasuke Uchiha",
          image: `https://tpng.net/download/200x200_49-499911_sasuke-png.png`
        },
        {
          id: 3,
          name: "Kakashi Hakate",
          image: `https://freepngimg.com/thumb/naruto/32472-8-kakashi-transparent-image-thumb.png`
        },
        {
          id: 4,
          name: "Master Jiraiya",
          image: `https://p.kindpng.com/picc/s/368-3684806_jiraiya-page-jiraiya-png-transparent-png.png`
        },
        {
          id: 5,
          name: "Lady Tsunade",
          image: `https://p.kindpng.com/picc/s/392-3928573_tsunade-base-image-naruto-x-boruto-ninja-voltage.png`
        },
        {
          id: 6,
          name: "Sakura Haruno",
          image: `https://png.pngitem.com/pimgs/s/325-3257222_transparent-sakura-png-sakura-de-naruto-png-png.png`
        },
        {
          id: 7,
          name: "Gaara",
          image: `https://images.pngnice.com/thumb.php?src=https://images.pngnice.com/download/2007/Gaara-PNG-Pic.png&h=200&w=200&zc=1`
        },
        {
          id: 8,
          name: "Pain",
          image: `https://freepngimg.com/thumb/naruto_pain/24977-2-naruto-pain-hd-thumb.png`
        },
        {
          id: 9,
          name: "Itachi Uchiha",
          image: `https://freepngimg.com/thumb/naruto/33664-3-itachi-uchiha-transparent-picture-thumb.png`
        }
      ],
      searchField : ''
    }
  }

  handleChange = (e) =>{
    this.setState({searchField : e.target.value})
  }

  // componentDidMount() {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then(response => response.json())
  //     .then(users => this.setState({ ataksuki: users }));
  // }
  render() {
    const { ataksuki, searchField } = this.state
    const filterAtaksuki = ataksuki.filter(ataksukis => ataksukis.name.toLowerCase().includes(searchField.toLowerCase()))
    console.log(filterAtaksuki);
    return (
      <div className="App">
        <h1>Naruto Characters</h1>
        <SearchBox placeHolder = "Search Character" handleChange = {this.handleChange}/>
        <CardList detail = {filterAtaksuki} />
      </div>
    )
  }
}

export default App;
