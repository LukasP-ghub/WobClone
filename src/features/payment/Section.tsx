import styles from './Section.module.scss';

const { section, sectionHeading } = styles;

export interface SectionProps {
  hTitle: string;
  children?: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ hTitle, children }) => {
  return (
    <section className={section}>
      <h3 className={sectionHeading}>{hTitle}</h3>
      {children}
    </section>
  );
}

export default Section;