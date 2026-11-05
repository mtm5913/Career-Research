<span class="status">Learning application · AI-assisted build · Hosted demo pending</span>

# A more conversational Olive

A FastAPI learning application exploring source-grounded food questions and a friendly, understandable interaction flow.

[View the GitHub repository](https://github.com/mtm5913/my-app-studio) · [Read the learning record](https://github.com/mtm5913/my-app-studio/blob/main/LEARNING.md) · [Inspect RAG/streaming PR #8](https://github.com/mtm5913/my-app-studio/pull/8)

Olive is a separate IS373 application project. It was not based on the Spotify interviews, and those interviews did not inform its features or interface decisions.

## Problem and direction

I wanted Olive to feel like a helpful companion. During browser review, I requested that answers appear above the question composer, making room for follow-up questions below. I also chose behavior for missing information: explain the source gap rather than invent an answer.

## My contribution—and AI's

I chose branding and intended behavior, requested copy and layout revisions, tried browser flows, interpreted selected checks with coaching, and decided whether to keep changes. **AI proposed implementation approaches, wrote the code, and ran automated tests.** This is not a claim of unaided programming or professional production experience.

## How the application works

The repository documents a small collection of attributed USDA passages, local lexical retrieval, citations, and streaming OpenAI responses through FastAPI. It also includes accounts and server-enforced member/admin access. Conversation state is described as tab-local.

The app repository is separate from [my server studio](https://github.com/mtm5913/my-server-studio), which concerns server/proxy work. Hosted availability has not been verified for this portfolio.

## A traceable iteration

| Stage | Evidence in the learning record |
|---|---|
| Intended experience | A companion-style interaction and clear account navigation |
| Observation | I wanted the answer above the composer |
| Revision | AI implemented the requested layout change |
| Review | I confirmed the revised order matched my intended flow |
| Limit | This was self-review, not an independent peer usability study |

## Recorded checks

PR #8 reports 139 foundation tests, 18 contracts, and three Chromium journeys, including source links, follow-ups, cancellation, errors, and narrow layout. The PR showed two passed CI checks when inspected on November 4, 2026.

Those are repository records, not tests rerun for this portfolio. Provider calls in automated tests are mocked. A small corpus and prompt-based grounding cannot guarantee that every generated statement is supported.

## Try it and inspect it

**A public working demo is not linked yet.** You can inspect code and setup instructions in the repository without an account. The application currently describes login and sharing consent for chat; recruiter-friendly project access is a next step, not a completed feature.

## Next learning step

Trace a question through retrieval, inspect an unsupported-answer case, and run a real-user usability session. Document one change and a retest before claiming an evaluated improvement.
