import React, { useState } from 'react';
import './FormatSelect.css';

const formatOptions = [
  {
    category: 'archive',
    formats: ['7Z', 'RAR', 'TAR', 'TAR.BZ2', 'TAR.GZ', 'ZIP'],
  },
  {
    category: 'audio',
    formats: ['MP3', 'WAV', 'AAC', 'FLAC'],
  },
  {
    category: 'cad',
    formats: ['DWG', 'DXF'],
  },
  {
    category: 'document',
    formats: ['PDF', 'DOCX', 'TXT', 'RTF'],
  },
  {
    category: 'ebook',
    formats: ['EPUB', 'MOBI', 'AZW3'],
  },
  {
    category: 'image',
    formats: ['JPG', 'PNG', 'GIF', 'TIFF'],
  },
  {
    category: 'presentation',
    formats: ['PPT', 'PPTX'],
  },
  {
    category: 'spreadsheet',
    formats: ['XLS', 'XLSX'],
  },
  {
    category: 'vector',
    formats: ['SVG', 'EPS'],
  },
  {
    category: 'video',
    formats: ['MP4', 'AVI', 'MOV'],
  },
];

function FormatSelect({ label, onSelect }) {
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(formatOptions[0].category);
  const [search, setSearch] = useState('');

  const currentFormats = formatOptions.find(opt => opt.category === selectedCategory)?.formats || [];

  return (
    <div className="format-select-wrapper">
      <button className="convert-select" onClick={() => setOpen(true)}>{label}</button>
      {open && (
        <div className="format-popup">
          <div className="format-popup-header">
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="format-search"
            />
            <button className="format-close" onClick={() => setOpen(false)}>&times;</button>
          </div>
          <div className="format-popup-body">
            <div className="format-categories">
              {formatOptions.map(opt => (
                <div
                  key={opt.category}
                  className={`format-category${selectedCategory === opt.category ? ' active' : ''}`}
                  onClick={() => setSelectedCategory(opt.category)}
                >
                  {opt.category}
                </div>
              ))}
            </div>
            <div className="format-list">
              {currentFormats
                .filter(fmt => fmt.toLowerCase().includes(search.toLowerCase()))
                .map(fmt => (
                  <button
                    key={fmt}
                    className="format-btn"
                    onClick={() => {
                      onSelect(fmt);
                      setOpen(false);
                    }}
                  >
                    {fmt}
                  </button>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FormatSelect;
