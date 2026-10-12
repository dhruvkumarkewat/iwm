import TiltCard from './TiltCard'

const teamMembers = [
  {
    name: 'Deepika',
    role: 'Team Lead at IWM',
    initials: 'D',
    category: 'Leadership'
  },
  {
    name: 'Tuba',
    role: 'Campaign Manager & Content Strategist',
    initials: 'T',
    category: 'Strategy'
  },
  {
    name: 'Priya',
    role: 'Lead Social Media Manager',
    initials: 'P',
    category: 'Social'
  },
  {
    name: 'Pratiksha',
    role: 'Lead Campaign Manager',
    initials: 'PR',
    category: 'Campaigns'
  },
  {
    name: 'Aakansha',
    role: 'In-house Editor',
    initials: 'A',
    category: 'Editorial'
  },
  {
    name: 'Khushi',
    role: 'Campaign Manager',
    initials: 'K',
    category: 'Campaigns'
  },
  {
    name: 'Shristi',
    role: 'Campaign Manager',
    initials: 'S',
    category: 'Campaigns'
  },
  {
    name: 'Charupreet',
    role: 'Talent Manager',
    initials: 'C',
    category: 'Talent'
  }
]

export default function Team() {
  return (
    <section id="team">
      <div className="team-container">
        {/* Header Block */}
        <div className="team-header reveal">
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            The Team
          </div>
          <h2 className="team-title">THE IWM BRAIN TRUST</h2>
          <div className="team-subheading">Different minds. One shared vision.</div>
          <p className="team-desc">
            A team bringing creativity, collaboration, and thoughtful execution together.
          </p>

          {/* Distinctive Brand Statement Badge */}
          <div className="team-brand-statement">
            <span className="sparkle">✦</span>
            <span>WOMEN-LED. PEOPLE-FIRST. BUILT ON COLLABORATION.</span>
            <span className="sparkle">✦</span>
          </div>
        </div>

        {/* 4-column desktop / 2-column mobile grid */}
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={member.name} className={`team-col reveal-3d delay-${(index % 4) + 1}`}>
              <TiltCard
                className="team-card"
                maxTilt={12}
                perspective={1000}
                scale={1.02}
              >
                <div className="team-card-inner">
                  {/* Portrait / Monogram frame */}
                  <div className="team-photo-frame">
                    <div className="team-avatar-placeholder">
                      <div className="team-monogram-circle">
                        <span>{member.initials}</span>
                      </div>
                      <div className="team-glow-orb"></div>
                    </div>

                    <div className="team-category-tag">
                      {member.category}
                    </div>

                    <div className="team-card-overlay">
                      <span className="team-overlay-hint">IWM Team Member</span>
                    </div>
                  </div>

                  {/* Member Details */}
                  <div className="team-info">
                    <div className="team-member-name">{member.name}</div>
                    <div className="team-member-role">{member.role}</div>
                  </div>
                </div>
              </TiltCard>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="team-foot reveal">
          <div className="team-collab-note">
            <i className="fa-solid fa-handshake-simple"></i>
            <span>
              Every campaign is guided by a dedicated manager ensuring continuous creator dialogue and real-time execution.
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
