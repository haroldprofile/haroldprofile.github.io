import { Check, Copy, ExternalLink, FileText, Terminal } from 'lucide-react';
import { handleCardPointerMove } from '../utils/spotlight';

interface TerminalWidgetProps {
  pdfMasterUrl: string;
  copied: boolean;
  onCopyEmail: () => void;
}

export function TerminalWidget({ pdfMasterUrl, copied, onCopyEmail }: TerminalWidgetProps) {
  return (
    <div
      className="card card-emerald spotlight-card terminal-widget hero-enter hero-enter-delay-3"
      onPointerMove={handleCardPointerMove}
    >
      <div className="terminal-chrome">
        <div className="chrome-left">
          <span className="chrome-dots" aria-hidden="true">
            <span className="chrome-dot" />
            <span className="chrome-dot" />
            <span className="chrome-dot" />
          </span>
          <span className="terminal-title">
            <Terminal size={12} aria-hidden="true" />
            <span>harold@prod:~</span>
          </span>
        </div>
        <span className="terminal-online">ONLINE</span>
      </div>

      <div className="terminal-body">
        <div className="terminal-line">
          <span className="terminal-prompt">$ whoami</span>
          <span className="terminal-output">Full Stack Developer (.NET / React)</span>
        </div>
        <div className="terminal-line">
          <span className="terminal-prompt">$ stack --core</span>
          <span className="terminal-output">.NET 8/10 · React 19 · CQRS · Docker</span>
        </div>
        <div className="terminal-line">
          <span className="terminal-prompt">$ shipped --prod</span>
          <span className="terminal-output">
            5 Enterprise Systems + PDFMaster
            <span className="cursor-blink" aria-hidden="true">_</span>
          </span>
        </div>

        <div className="terminal-commands" aria-label="Quick terminal actions">
          <a
            href={pdfMasterUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="terminal-cmd"
          >
            <span>$ open pdfmaster</span>
            <ExternalLink size={12} aria-hidden="true" />
          </a>

          <a href="#resume" className="terminal-cmd">
            <FileText size={12} aria-hidden="true" />
            <span>$ view resume</span>
          </a>

          <button
            type="button"
            className="terminal-cmd"
            onClick={onCopyEmail}
            aria-live="polite"
          >
            {copied ? (
              <>
                <Check size={12} color="#10B981" aria-hidden="true" />
                <span>$ copied!</span>
              </>
            ) : (
              <>
                <Copy size={12} aria-hidden="true" />
                <span>$ copy email</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
