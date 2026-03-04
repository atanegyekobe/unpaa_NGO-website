import { useState, useEffect } from 'react'
import './AccessibilityToolbar.css'

function AccessibilityToolbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [fontSize, setFontSize] = useState(100)
  const [highContrast, setHighContrast] = useState(false)
  const [simpleText, setSimpleText] = useState(false)

  // Load preferences from localStorage
  useEffect(() => {
    const savedFontSize = localStorage.getItem('fontSize')
    const savedHighContrast = localStorage.getItem('highContrast')
    const savedSimpleText = localStorage.getItem('simpleText')

    if (savedFontSize) setFontSize(parseInt(savedFontSize))
    if (savedHighContrast) setHighContrast(savedHighContrast === 'true')
    if (savedSimpleText) setSimpleText(savedSimpleText === 'true')
  }, [])

  // Close panel with ESC key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen])

  // Apply font size
  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`
    localStorage.setItem('fontSize', fontSize.toString())
  }, [fontSize])

  // Apply high contrast
  useEffect(() => {
    if (highContrast) {
      document.body.classList.add('high-contrast')
    } else {
      document.body.classList.remove('high-contrast')
    }
    localStorage.setItem('highContrast', highContrast.toString())
  }, [highContrast])

  // Apply simple text
  useEffect(() => {
    if (simpleText) {
      document.body.classList.add('simple-text')
    } else {
      document.body.classList.remove('simple-text')
    }
    localStorage.setItem('simpleText', simpleText.toString())
  }, [simpleText])

  const increaseFontSize = () => {
    if (fontSize < 150) setFontSize(fontSize + 10)
  }

  const decreaseFontSize = () => {
    if (fontSize > 80) setFontSize(fontSize - 10)
  }

  const resetFontSize = () => {
    setFontSize(100)
  }

  const toggleHighContrast = () => {
    setHighContrast(!highContrast)
  }

  const toggleSimpleText = () => {
    setSimpleText(!simpleText)
  }

  const resetAll = () => {
    setFontSize(100)
    setHighContrast(false)
    setSimpleText(false)
    localStorage.clear()
  }

  return (
    <>
      {/* Accessibility Toggle Button */}
      <button
        className={`accessibility-toggle ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close accessibility menu" : "Open accessibility menu"}
        aria-expanded={isOpen}
        title="Accessibility Options"
      >
        <span className="accessibility-icon" aria-hidden="true">
          {isOpen ? '✕' : '♿'}
        </span>
      </button>

      {/* Accessibility Panel - Only shows when isOpen is true */}
      {isOpen && (
        <div 
          className="accessibility-panel"
          role="dialog"
          aria-label="Accessibility settings"
        >
          <div className="panel-header">
            <h2>Accessibility Options</h2>
            <button
              className="close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Close accessibility menu"
            >
              ✕
            </button>
          </div>

          <div className="panel-content">
            {/* Font Size Controls */}
            <div className="control-group">
              <h3>Text Size</h3>
              <p className="control-description">Adjust text size for better readability</p>
              <div className="button-group">
                <button
                  onClick={decreaseFontSize}
                  disabled={fontSize <= 80}
                  aria-label="Decrease text size"
                  className="control-btn"
                >
                  A-
                </button>
                <span className="font-size-display" aria-live="polite">
                  {fontSize}%
                </span>
                <button
                  onClick={increaseFontSize}
                  disabled={fontSize >= 150}
                  aria-label="Increase text size"
                  className="control-btn"
                >
                  A+
                </button>
                <button
                  onClick={resetFontSize}
                  aria-label="Reset text size to default"
                  className="control-btn reset-btn"
                >
                  Reset
                </button>
              </div>
            </div>

            {/* High Contrast Toggle */}
            <div className="control-group">
              <h3>High Contrast</h3>
              <p className="control-description">Enhance color contrast for better visibility</p>
              <button
                onClick={toggleHighContrast}
                className={`toggle-btn ${highContrast ? 'active' : ''}`}
                aria-pressed={highContrast}
                aria-label={highContrast ? "Disable high contrast mode" : "Enable high contrast mode"}
              >
                <span className="toggle-slider"></span>
                <span className="toggle-label">{highContrast ? 'ON' : 'OFF'}</span>
              </button>
            </div>

            {/* Simplified Text Toggle */}
            <div className="control-group">
              <h3>Simplified Text</h3>
              <p className="control-description">Use simpler language and larger spacing</p>
              <button
                onClick={toggleSimpleText}
                className={`toggle-btn ${simpleText ? 'active' : ''}`}
                aria-pressed={simpleText}
                aria-label={simpleText ? "Disable simplified text mode" : "Enable simplified text mode"}
              >
                <span className="toggle-slider"></span>
                <span className="toggle-label">{simpleText ? 'ON' : 'OFF'}</span>
              </button>
            </div>

            {/* Reset All Button */}
            <div className="control-group">
              <button
                onClick={resetAll}
                className="reset-all-btn"
                aria-label="Reset all accessibility settings to default"
              >
                Reset All Settings
              </button>
            </div>
          </div>

          {/* Keyboard Shortcuts Info */}
          <div className="panel-footer">
            <details>
              <summary>Keyboard Shortcuts</summary>
              <ul className="shortcuts-list">
                <li><kbd>Tab</kbd> Navigate forward</li>
                <li><kbd>Shift + Tab</kbd> Navigate backward</li>
                <li><kbd>Enter</kbd> Activate links/buttons</li>
                <li><kbd>Esc</kbd> Close this menu</li>
              </ul>
            </details>
          </div>
        </div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="accessibility-backdrop"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        ></div>
      )}
    </>
  )
}

export default AccessibilityToolbar
