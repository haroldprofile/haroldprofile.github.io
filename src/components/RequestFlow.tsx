import { motion, type Variants } from 'motion/react';

const list: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18 } },
};

const node: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

const arrow: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  show: { pathLength: 1, opacity: 1, transition: { duration: 0.35 } },
};

/** Request-flow diagram whose arrows draw themselves when the drawer opens. */
export function RequestFlow({ steps }: { steps: string[] }) {
  return (
    <motion.ol className="flow" variants={list} initial="hidden" animate="show" aria-label="Request flow">
      {steps.map((label, i) => (
        <li key={label} className="flow-item">
          <motion.span className="flow-node" variants={node}>
            {label}
          </motion.span>
          {i < steps.length - 1 && (
            <svg className="flow-arrow" viewBox="0 0 40 12" aria-hidden="true">
              <motion.path
                d="M0 6 H34 M28 1 L34 6 L28 11"
                fill="none"
                stroke="#10B981"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={arrow}
              />
            </svg>
          )}
        </li>
      ))}
    </motion.ol>
  );
}
