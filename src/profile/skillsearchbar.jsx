// src/SearchBar.js
import React, { useState } from 'react';

const technicalSkills = [
    'HTML',
    'CSS',
  'JavaScript',
  'Python',
  'Java',
  'C#',
  'Ruby',
  'Go',
  'Swift',
  'Kotlin',
  'PHP',
  'TypeScript',
  'SQL',
  'NoSQL',
  'React',
  'Angular',
  'Vue',
  'Django',
  'Flask',
  'Spring',
  'Rails',
  'Node.js',
  'Express',
  'GraphQL',
  'REST',
  'Docker',
  'Kubernetes',
  'AWS',
  'Azure',
  'GCP',
];

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value) {
      const filteredSuggestions = technicalSkills.filter(skill =>
        skill.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    setSuggestions([]);
  };

  return (
    <div className=' flex flex-col space-y-5'>
      <label className='text-xl'>
        Search by Job title
      </label>
      <input className='border-2 border-gray-800 p-3 '
        type="search"
        value={query}
        onChange={handleInputChange}
        placeholder="Search technical skills..."
      />
      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
